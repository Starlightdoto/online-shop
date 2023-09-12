import React, {FC, useState} from "react";


interface ResultHeaderProps {

}

export const ResultHeader:FC<ResultHeaderProps> = (props) => {

    const [headerState, setHeaderState] = useState('null');

    return (
        <div className={"header"}>
            <h1>{headerState}</h1>
        </div>
    );
};