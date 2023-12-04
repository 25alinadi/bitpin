import {FC, JSX} from "react";

const MainLayout:FC<{children: JSX.Element}> = props => {
    return(
        <div className={"bg-gray-800 w-full min-h-screen"}>
            <div className={"container py-12 mx-auto"}>
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout