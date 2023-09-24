import React, {FC} from 'react';
import ProductItem from "./ProductItem";
import {Button} from "./ui-components/Button";
//@ts-ignore
import MyImage from '../assets/shop-logo.jpg';
//test

interface ProductListProps {
    products: any[],
    className: string,
    //@ts-ignore
    removeItem?,
    cartItems?: any[],
    //@ts-ignore
    setCartItems?,
    //@ts-ignore
    showSnackbar?,
}

const ProductList:FC<ProductListProps> = (props) => {
    const {products, className, removeItem, cartItems, setCartItems, showSnackbar} = props;

    return (
        <div>
            {className === 'product' ?
                <div className={`${className}List`}>
                    {products.map((product) => {
                        return <ProductItem id={product.id}
                                            key={product.id}
                                            imgSrc={product.image}
                                            className={"grid"}
                                            name={product.title}
                                            category={product.category}
                                            description={product.description}
                                            price={product.price}
                                            quantity={product.id}
                                            cartItems={cartItems}
                                            setCartItems={setCartItems}
                                            showSnackbar={showSnackbar}
                        />
                    })}
                </div>
                : <div className={`${className}List`}>
                    {products.map((product) => {
                        if(product.name === undefined){
                            return <h1>Loading...</h1>
                        } else return <ProductItem key={product.id}
                                             id={product.id}
                                             imgSrc={product.imgSrc ?? "no logo"}
                                             className={"grid"}
                                             classNameAdditional={"cart"}
                                             name={product.name ?? "null"}
                                             category={product.category}
                                             description={product.description}
                                             price={product.price}
                                             removeItem={removeItem}
                                             quantity={product.id}
                        />

                    })}
                    </div>
            }
        </div>
    );
};

export default ProductList;