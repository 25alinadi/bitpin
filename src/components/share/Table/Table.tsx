import React from "react"
import TableTh from "./TableTh";
import TableTdSkeleton from "../Skeleton/TableTdSkeleton";

interface ITableProps {
    isLoading: boolean,
    title?: string,
    titlesTable: Array<string>,
    children: any
}

const Table: React.FC<ITableProps> = ({
                                          isLoading = true,
                                          titlesTable = [],
                                          title = null,
                                          children
                                      }) => {
    const tableThItems = titlesTable.map((title, index) => <TableTh key={`th-${index}`} title={title}/>)
    const tableLoadingSample = titlesTable.map((_, i) => <TableTdSkeleton key={`skeleton-td-${i}`}/>)
    const tableLoadingRows = [1, 2, 3, 4, 5, 6].map((_, i) => <tr key={`skeleton-tr-${i}`}>{tableLoadingSample}</tr>)


    return (
        <div className="flex flex-col">
            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className={"mb-6"}>
                    <div>
                        {title && <div className={"text-2xl text-semibold text-white mb-2"}>{title}</div>}
                    </div>
                </div>
                <div className="inline-block min-w-full align-middle border border-gray-600 sm:rounded-lg mb-6">
                    <table className="min-w-full">
                        <thead className={"!bg-transparent"}>
                            <tr>
                                {tableThItems}
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? tableLoadingRows : children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table