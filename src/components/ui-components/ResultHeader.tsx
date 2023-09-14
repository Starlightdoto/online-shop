import React, {FC, useState} from "react";


interface ResultHeaderProps {
    searchResultsCount: number,
}

export const ResultHeader:FC<ResultHeaderProps> = ({searchResultsCount}) => {

    const [headerState, setHeaderState] = useState('Search results');

    return (
        <div className={"header"}>n
            <h1>{headerState}</h1>
            <h2 style={{marginTop: 20}}>{searchResultsCount}</h2>
        </div>
    );
};