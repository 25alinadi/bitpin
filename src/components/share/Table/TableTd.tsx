import React from "react"

interface TableTdProps{
    TdClassName? : string,
    children: any
}

const TableTd:React.FC<TableTdProps> = ({TdClassName = null, children}) => {
    return(
        <td className={`px-6 py-4 whitespace-no-wrap text-center border-b border-gray-700 ${TdClassName ?? null}`}>
            {children}
        </td>
    )
}

export default TableTd