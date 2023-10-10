import React, {FC, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Button} from "./Button";

interface ItemCounterProps {
    itemCount: number | undefined,
    changeItemCount: any,
    setItemCountLocal: any,
    itemId: string,
}

const ItemCounter:FC<ItemCounterProps> = (props) => {
    const {itemCount, changeItemCount, setItemCountLocal, itemId} = props;

    return (
        <div className={"itemCounter"}>
            <Button onClick={()=> {
                changeItemCount('decrease', setItemCountLocal, itemId);
            }} className={'decrease'}><RemoveIcon  /></Button>
            <h2>{itemCount}</h2>
            <Button onClick={()=> {
                changeItemCount('increase', setItemCountLocal, itemId);
            }} className={'increase'}><AddIcon  /></Button>
        </div>
    );
};

export default ItemCounter;