import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
//@ts-ignore
import MyImage from '../assets/shop-logo.jpg';

interface ProductItemProps {
    name: string,
    quantity?: number,
    price: number,
    description: string,
    category:string,
}

const ProductItem:FC<ProductItemProps> = (props) => {
    const {name, quantity = 0, price, description, category} = props;
    return (
        <div className={"productItem"}>
            <img className={"productImage-1"} src={MyImage} alt=""/>
            <NavLink style={{textDecoration:"none", color:"white"}} to={"/product/id"}><h3 className={"productName-grid"}>{name}</h3></NavLink>
            <h4>Quantity: {quantity}</h4>
            <h4>Price: ${price}</h4>
            <h4>Category: {category}</h4>
            <h4>Description: {description}</h4>
        </div>
    );
};

export default ProductItem;