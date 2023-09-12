import React, {FC, useState} from "react";


interface ResultHeaderProps {
    headerText: string,
}

export const ResultHeader:FC<ResultHeaderProps> = ({headerText}) => {

    const [headerState, setHeaderState] = useState(headerText || 'null');

    return (
        <div className={"header"}>
            <h1>{headerState}</h1>
        </div>
    );
};