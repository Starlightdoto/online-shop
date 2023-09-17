import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
//@ts-ignore
import MyImage from '../assets/shop-logo.jpg';
import {Button} from "./ui-components/Button";
import DeleteIcon from '@mui/icons-material/Delete';

interface ProductItemProps {
    id:number,
    imgSrc?: string,
    name: string,
    quantity?: number,
    price: number,
    description: string,
    category:string,
    className: string,
    classNameAdditional?: string,
    //@ts-ignore
    removeItem?,
}

const ProductItem:FC<ProductItemProps> = (props) => {
    const {name, className, removeItem, classNameAdditional, imgSrc, quantity = 0, price, description, category, id} = props;
    return (
        <div>
            {classNameAdditional === "cart" ?
                <div className={`productItem-${classNameAdditional}`}>
                    <img className={`productImage-${className}`} src={imgSrc} alt=""/>
                    <NavLink style={{textDecoration:"none", color:"white"}} to={`/product/${id}`}><h3 className={"productName-grid"}>{name}</h3></NavLink>
                    <h4>Quantity: {quantity}</h4>
                    <h4>Price: ${price}</h4>
                    <h4>Category: {category}</h4>
                    <h4 className={`productItemDescription-${className}`}>Description: {description}</h4>
                    <Button onClick={() => removeItem(id)}  className={"remove"}><DeleteIcon /></Button>
                </div>
            : <div className={`productItem-${className}`}>
                    <img className={`productImage-${className}`} src={imgSrc} alt=""/>
                    <NavLink style={{textDecoration:"none", color:"white"}} to={`/product/${id}`}><h3 className={"productName-grid"}>{name}</h3></NavLink>
                    <h4>Quantity: {quantity}</h4>
                    <h4>Price: ${price}</h4>
                    <h4>Category: {category}</h4>
                    <h4 className={`productItemDescription-${className}`}>Description: {description}</h4>
                </div>
            }
        </div>
    );
};

export default ProductItem;