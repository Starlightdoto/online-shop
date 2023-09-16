import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
//@ts-ignore
import MyImage from '../assets/shop-logo.jpg';

interface ProductItemProps {
    id:number,
    imgSrc?: string,
    name: string,
    quantity?: number,
    price: number,
    description: string,
    category:string,
    className: string,
}

const ProductItem:FC<ProductItemProps> = (props) => {
    const {name, className, imgSrc, quantity = 0, price, description, category, id} = props;
    return (
        <div className={`productItem-${className}`}>
            <img className={`productImage-${className}`} src={imgSrc} alt=""/>
            <NavLink style={{textDecoration:"none", color:"white"}} to={`/product/${id}`}><h3 className={"productName-grid"}>{name}</h3></NavLink>
            <h4>Quantity: {quantity}</h4>
            <h4>Price: ${price}</h4>
            <h4>Category: {category}</h4>
            <h4 className={`productItemDescription-${className}`}>Description: {description}</h4>
        </div>
    );
};

export default ProductItem;