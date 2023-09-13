import React, {FC} from 'react';
import ProductItem from "./ProductItem";


interface ProductListProps {
    products: any[],
}

const ProductList:FC<ProductListProps> = ({products}) => {
    return (
        <div className={"productList"}>
            {products.map((product) => {
                return <ProductItem name={product.title}
                                    category={product.category}
                                    description={product.description}
                                    price={product.price}
                                    quantity={product.id}
                />
            })}
        </div>
    );
};

export default ProductList;