import './assets/css/global.css'
import {useEffect, useState} from "react";
import {IMarketCard} from "./types/currency.ts";
import httpClient from "./services/httpClient.ts";
import {IResponseData} from "./types/response.ts";
import MainLayout from "./components/layouts/MainLayout.tsx";
import Table from "./components/share/Table";
import TableTr from "./components/share/Table/TableTr.tsx";
import TableTd from "./components/share/Table/TableTd.tsx";
import {socket} from "./services/socket.ts";

function App() {
    const [markets, setMarkets] = useState<IMarketCard[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const titleHeadTable: Array<string> = ['نام رمز ارز', 'قیمت', 'تغییرات']

    const itemsTableRows = markets.map((item, index) =>
        <TableTr key={`table-row${index}`}>
            <TableTd>
                <div className={"flex flex-row justify-start items-center"}>
                    <img src={item?.currency1?.image} className={"w-10 ml-2"} alt={item.currency1.title}/>
                    <div className={"text-right"}>
                        <div className={"text-white mb-1.5"}>{item?.currency1?.title_fa}</div>
                        <div className={"text-gray-500 text-sm"}>{`${item.currency1.code}/${item.currency2.code}`}</div>
                    </div>
                </div>
            </TableTd>
            <TableTd>
                <div className={"text-white"}>{parseInt(item.price_info.price).toLocaleString()}</div>
            </TableTd>
            <TableTd TdClassName={"text-white"}>
                <div
                    className={`${(item.price_info.change > 0) ? "text-green-600" : "text-red-600"}`}>{item.price_info.change?.toFixed(2)}%
                </div>
            </TableTd>
        </TableTr>
    )

    const updateMarketPrice = (data: any) => {
        setMarkets(prevMarkets => {
            const keys: string[] = Object.keys(data).slice(0, -2);
            const updatedMarkets = prevMarkets.map(market => {
                if (keys.includes(String(market.id))) {
                    return {
                        ...market,
                        price_info: {
                            ...market.price_info,
                            price: data[String(market.id)].price,
                            change: data[String(market.id)].change,
                            min: data[String(market.id)].min,
                            max: data[String(market.id)].max
                        }
                    };
                }
                return market;
            });
            return updatedMarkets;
        });
    };

    const fetchMarketData = async () => {
        await httpClient.get('mkt/markets/')
            .then(response => {
                if (response.status === 200) {
                    const data: IResponseData = response.data
                    setMarkets(data.results)
                    setLoading(false)
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        fetchMarketData()

        socket.onopen = () => {
            console.log('Connected to WebSocket');
            const subscriptionMessage = {method: 'sub_to_price_info'};
            socket.send(JSON.stringify(subscriptionMessage));
        };

        socket.onmessage = (event) => {
            const eventData = JSON.parse(event.data);
            if (eventData && eventData.event === 'currency_price_info_update') {
                updateMarketPrice(eventData);
            } else {
                console.log('Unknown event:', eventData);
            }
        };

        return () => {console.log('WebSocket connection closed')};
    }, []);

    return (
        <MainLayout>
            <Table title={"قیمت های ارز دیجیتال"} isLoading={loading} titlesTable={titleHeadTable}>
                {itemsTableRows.length > 0 && itemsTableRows}
            </Table>
        </MainLayout>
    )
}

export default App
