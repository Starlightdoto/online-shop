import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
import StyledText from "./ui-components/StyledText";


interface OrderCardProps {
    id?:string,
    date: any,
    status: string,
    price: number,

}

const OrderPage:FC<OrderCardProps> = (props) => {
    const {id, date, status, price} = props;
    const newDate = new Date(date.seconds * 1000).toDateString();

    return (
        <div className={"order-id-card"}>
            {id ? ( <div>
                <h3>Order# {id}</h3>
                <h3>Date: {newDate}</h3>
                <h3>Status: {status}</h3>
                <h3>Price: ${price}</h3>
            </div>) : <h1>Loading...</h1>
            }
        </div>

    );
};

export default OrderPage;

