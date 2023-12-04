import React from "react"
import {generateImageLink} from "../../../helpers/functions";

interface ITableTdContentProps {
    content: any,
    image?: string,
    hasImage?: boolean,
    isPrimary?: boolean,
    customClassName?: string
}

const TableTdContent: React.FC<ITableTdContentProps> = ({content, hasImage=false,image = null, isPrimary=false, customClassName=null}) => {
    return (
        <div className="flex items-center justify-center">
            {hasImage && <div className="flex-shrink-0 w-10 h-10 ml-4">
                <img className="w-10 h-10 rounded-full border" src={generateImageLink(image!)} alt="img group"/>
            </div>}
            <div className={`text-md leading-5 ${isPrimary ? 'text-black' : 'text-gray-500'} ${customClassName ?? ''}`}>
                {content}
            </div>
        </div>
    )
}

export default TableTdContent