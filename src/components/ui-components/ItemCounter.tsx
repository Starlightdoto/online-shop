import React, {FC, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Button} from "./Button";

interface ItemCounterProps {
    itemCount: number,
    setItemCount: React.Dispatch<React.SetStateAction<number>>,
}

const ItemCounter:FC<ItemCounterProps> = (props) => {
    const {itemCount, setItemCount} = props;

    return (
        <div className={"itemCounter"}>
            <Button onClick={()=> setItemCount(prevState => prevState - 1)} className={'decrease'}><RemoveIcon  /></Button>
            <h2>{itemCount}</h2>
            <Button onClick={() => setItemCount(prevState => prevState + 1)} className={'increase'}><AddIcon  /></Button>
        </div>
    );
};

export default ItemCounter;