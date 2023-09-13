import React, {FC} from 'react';

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
            <h3>Name:{name}</h3>
            <h3>Quantity: {quantity}</h3>
            <h3>Price: ${price}</h3>
            <h3>Category: {category}</h3>
            <h3>Description: {description}</h3>
        </div>
    );
};

export default ProductItem;