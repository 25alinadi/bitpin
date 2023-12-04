import React from "react"

interface ITableEmptyProps{
    colSpan: number,
    message: string
}

const TableEmpty:React.FC<ITableEmptyProps> = ({colSpan, message}) => {
    return(
        <tr>
            <td colSpan={colSpan} className={"px-6 py-4 whitespace-no-wrap text-center text-lg text-gray-500 leading-5"}>
                {message}
            </td>
        </tr>
    )
}

export default TableEmpty