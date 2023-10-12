import React, {FC, useState} from 'react';
import {Link, NavLink} from "react-router-dom";

interface OrderCardProps {
    id?:string,
    date: any,
    status: string,
    price: number,

}

const OrderCard:FC<OrderCardProps> = (props) => {
    const {id, date, status, price} = props;
    const newDate = new Date(date.seconds * 1000).toDateString();

    return (
        <div className={"orderCard"}>
            {id ? ( <div>
                <NavLink to={'/orders/:id'}>
                <h3> Order # {id}</h3>
                </NavLink>
                <h3>Date: {newDate}</h3>
                <h3>Status: {status}</h3>
                <h3>Price: ${price}</h3>
            </div>) : <h1>Loading...</h1>
            }
        </div>

    );
};

export default OrderCard;

