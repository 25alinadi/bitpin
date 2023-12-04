export interface IMarketCard{
    id: number,
    currency1: ICurrency,
    currency2: ICurrency,
    tradable: boolean,
    for_test: boolean,
    otc_sell_percent: number,
    otc_buy_percent: number,
    otc_max_buy_amount: number,
    otc_max_sell_amount: number,
    order_book_info: IOrderBookInfo,
    internal_price_info: IInternalPriceInfo,
    price_info: IPriceInfo,
    price: number,
    title: string,
    code: string,
    title_fa: string,
    trading_view_source: string,
    trading_view_symbol: string,
    otc_market: string,
    text: string,
    volume_24h: number,
    market_cap: number,
    circulating_supply: number,
    all_time_high: number,
    popularity_weight: number,
    freshness_weight: number
}

export interface ICurrency{
    id: number,
    title: string,
    title_fa: string,
    code: string,
    tradable: boolean,
    for_test: boolean,
    image: string,
    decimal: number,
    decimal_amount: number,
    decimal_irt: number,
    color: string,
    high_risk: boolean,
    show_high_risk: boolean,
    withdraw_commission: number,
    tags: [],
    etf: boolean,
    for_binvest: boolean,
    for_loan: boolean,
    for_stake: boolean,
    recommend_for_deposit_weight: number
}

export interface IOrderBookInfo{
    created_at: string | number,
    price: string,
    change: number,
    min: number,
    max: number,
    time: string,
    mean: number,
    value: number,
    amount: number
}

export interface IInternalPriceInfo extends IOrderBookInfo{}

export interface IPriceInfo extends IOrderBookInfo{}