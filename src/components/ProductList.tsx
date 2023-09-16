import React, {FC} from 'react';
import ProductItem from "./ProductItem";
import {Button} from "./ui-components/Button";


interface ProductListProps {
    products: any[],
    className: string,
    //@ts-ignore
    removeItem?,
}

const ProductList:FC<ProductListProps> = (props) => {
    const {products, className, removeItem} = props;
    return (
        <div>
            {className === 'product' ?
                <div className={`${className}List`}>
                    {products.map((product) => {
                        return <ProductItem id={product.id}
                                            imgSrc={product.image}
                                            className={"grid"}
                                            name={product.title}
                                            category={product.category}
                                            description={product.description}
                                            price={product.price}
                                            quantity={product.id} />
                    })}
                </div>
                : <div className={`${className}List`}>
                        {products.map((product) => {
                            return (<ProductItem id={product.id}
                                                 imgSrc={product.image}
                                                 className={"grid"}
                                                 classNameAdditional={"cart"}
                                                 name={product.title}
                                                 category={product.category}
                                                 description={product.description}
                                                 price={product.price}
                                                 removeItem={removeItem}
                                                 quantity={product.id} />
                            )
                        })}
                    </div>
            }
        </div>
    );
};

export default ProductList;