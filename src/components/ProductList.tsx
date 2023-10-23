import React, {FC} from 'react';
import ProductItem from "./ProductItem";

interface ProductListProps {
    products: any,
    className: string,
    removeItem?: any,
    cartItems?: any[],
    setCartItems?: any,
    addItemToCart?: any,
    itemCount?: number,
    setItemCount?: React.Dispatch<React.SetStateAction<number>>,
    changeCartItems?: any,
}

const ProductList:FC<ProductListProps> = (props) => {
    const { products, className,
            removeItem, cartItems,
            setCartItems, addItemToCart, changeCartItems } = props;


    return (
        <div className={`${className}List`}>
            {products.map((product: any) => {
                let unavailable = false;
                if(product.quantity < 1) unavailable = true;
                switch(className) {
                    case 'product':
                        return <ProductItem id={product._id}
                                            key={product._id}
                                            rating={product.rating}
                                            imgSrc={product.image}
                                            className={"grid"}
                                            name={product.title}
                                            category={product.category}
                                            description={product.description}
                                            price={product.price}
                                            quantity={product.quantity}
                                            addItemToCart={addItemToCart}
                                            classNameAdditional={unavailable ? 'unavailable' : ''}
                            />
                    case 'cart':
                        if(product.item.name === undefined){
                            return <h1>Loading...</h1>
                        } else return      <ProductItem
                                             key={product.item._id}
                                             id={product.item._id}
                                             rating={product.item.rating}
                                             imgSrc={product.item.imgSrc ?? "no logo"}
                                             className={"grid"}
                                             classNameAdditional={"cart"}
                                             name={product.item.name ?? "null"}
                                             category={product.item.category}
                                             description={product.item.description}
                                             price={product.item.price}
                                             removeItem={removeItem}
                                             itemCount={product.count}
                                             changeCartItems={changeCartItems}
                            />
                    case 'singleOrder':
                                if(product.item.name === undefined){
                                    return <h1>Loading...</h1>
                                } else return <ProductItem
                                        key={product.item._id}
                                        id={product.item._id}
                                        rating={product.item.rating}
                                        imgSrc={product.item.imgSrc ?? "no logo"}
                                        className={"grid"}
                                        classNameAdditional={"singleOrder"}
                                        name={product.item.name ?? "null"}
                                        category={product.item.category}
                                        description={product.item.description}
                                        price={product.item.price}
                                        quantity={product.count}
                                    />
                }
            })}
        </div>
    );
};

export default ProductList;