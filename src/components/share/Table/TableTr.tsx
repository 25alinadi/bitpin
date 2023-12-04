import React from "react"

interface TableTrProps {
    TrClassName?: string,
    children: any
}

const TableTr: React.FC<TableTrProps> = ({TrClassName, children}) => {
    return (
        <tr className={`${TrClassName ?? ''}`}>
            {children}
        </tr>
    )
}

export default TableTr