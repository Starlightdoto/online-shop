import React, {FC} from 'react';
import ProductItem from "./ProductItem";


interface ProductListProps {
    products: number[],
}

const ProductList:FC<ProductListProps> = ({products}) => {
    return (
        <div className={"productList"}>
            {products.map((product) => {
                return <ProductItem />
            })}
        </div>
    );
};

export default ProductList;