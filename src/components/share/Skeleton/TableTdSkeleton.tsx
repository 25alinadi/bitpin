import React from "react"
import TableTd from "../Table/TableTd";


const TableTdSkeleton:React.FC = () => {
    return(
        <TableTd>
            <div className="animate-pulse max-w-sm w-full mx-auto">
                <div className="flex-1">
                    <div className="h-6 bg-gray-700 rounded"/>
                </div>
            </div>
        </TableTd>
    )
}

export default TableTdSkeleton