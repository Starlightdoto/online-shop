import React, {FC} from 'react';
import ProductItem from "./ProductItem";
//@ts-ignore
import MyImage from '../assets/shop-logo.jpg';


interface ProductListProps {
    products: any[],
    className: string,
    removeItem?: any,
    cartItems?: any[],
    setCartItems?: any,
    showSnackbar?: any,
    addItemToCart?: any,
    itemCount?: number,
    setItemCount?: React.Dispatch<React.SetStateAction<number>>,
}

const ProductList:FC<ProductListProps> = (props) => {
    const { products, className,
            removeItem, cartItems,
            setCartItems, showSnackbar,
            addItemToCart } = props;


    return (

        <div className={`${className}List`}>
            {products.map((product: any) => {
                switch(className) {
                    case 'product':
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
                    case 'cart':
                        if(product.name === undefined){
                            return <h1>Loading...</h1>
                        } else return      <ProductItem
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
                    case 'singleOrder':
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
                }
            })}
        </div>
    );
};

export default ProductList;