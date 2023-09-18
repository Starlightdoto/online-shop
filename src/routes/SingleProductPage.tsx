import React, {useState, FC, useEffect} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import {Button} from "../components/ui-components/Button";
import {fetchOneProduct} from "../api/fetchProducts";

interface SingleProductPageProps {
    cartItems: {}[],
    //@ts-ignore
    setCartItems?,
}

const SingleProductPage:FC<SingleProductPageProps> = (props) => {
    const {cartItems, setCartItems} = props;
    const [actualProduct, setActualProduct] = useState(
        {id: null, price: 0, description: 'null', name:'null', category:'null', imgSrc:'null'}
    );

    const url = window.location.href;
    const productId = url.substring(url.length-1);

    const fetchProduct = async () => {
        const product = await fetchOneProduct(productId);
        setActualProduct((prevState) => {
            return {id: product.id,
                    price: product.price,
                    description: product.description,
                    name: product.title,
                    category: product.category,
                    imgSrc:product.image,
            }
        });
    }

    const addToCart = () => {
        setCartItems((prevState:any) => {
            return [...prevState, actualProduct]
        })
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <Navbar isOnMainPage={false}  />
            {actualProduct && actualProduct.id ?
                <ProductItem id={actualProduct.id } imgSrc={actualProduct.imgSrc} className={"single"} price={actualProduct.price} description={actualProduct.description} name={actualProduct.name} category={actualProduct.category} />
                : <h1>Loading...</h1>
            }
            <Button onClick={addToCart}  className={"default"} buttonText={"Add to cart"}/>
            <Footer />
        </div>
    );
};

export default SingleProductPage;