import React from "react"

interface TableThProps{
    title:string,
    ThClassName? : string
}

const TableTh:React.FC<TableThProps> = ({ title , ThClassName = null}) => {
    return(
        <th
            className={`h-12 px-6 py-3  text-md leading-4 tracking-wider text-center text-gray-300 uppercase border-b-2 border-gray-700 ${ThClassName ?? null}`}>
            {title}
        </th>
    )
}

export default TableTh