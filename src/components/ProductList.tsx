import React, {FC} from 'react';
import ProductItem from "./ProductItem";
//@ts-ignore
import MyImage from '../assets/shop-logo.jpg';


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
    addItemToCart?: any,
}

const ProductList:FC<ProductListProps> = (props) => {
    const {products, className, removeItem, cartItems, setCartItems, showSnackbar, addItemToCart} = props;

    return (
        <div>
            {className === 'product' ?
                <div className={`${className}List`}>
                    {products.map((product) => {
                        return <ProductItem id={product.id}
                                            key={product.id}
                                            rating={product.rating}
                                            imgSrc={product.image}
                                            className={"grid"}
                                            name={product.title}
                                            category={product.category}
                                            description={product.description}
                                            price={product.price}
                                            quantity={product.quantity}
                                            addItemToCart={addItemToCart}
                        />
                    })}
                </div>
                : <div className={`${className}List`}>
                    {products.map((product) => {
                        if(product.name === undefined){
                            return <h1>Loading...</h1>
                        } else return <ProductItem
                                             key={product.id}
                                             id={product.id}
                                             rating={product.rating}
                                             imgSrc={product.imgSrc ?? "no logo"}
                                             className={"grid"}
                                             classNameAdditional={"cart"}
                                             name={product.name ?? "null"}
                                             category={product.category}
                                             description={product.description}
                                             price={product.price}
                                             removeItem={removeItem}
                        />
                    })}
                    </div>
            }
        </div>
    );
};

export default ProductList;