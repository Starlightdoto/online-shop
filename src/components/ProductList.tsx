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
                        if(product.item.name === undefined){
                            return <h1>Loading...</h1>
                        } else return      <ProductItem
                                             key={product.item.id}
                                             id={product.item.id}
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