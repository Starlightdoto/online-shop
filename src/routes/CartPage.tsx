import React, {useEffect} from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import fetchAllProducts from "../api/fetchProducts";

interface CartPageProps {
    cartItems: {}[],
    //@ts-ignore
    setCartItems,
}

const CartPage:FC<CartPageProps> = ({cartItems, setCartItems}) => {

    const getAllProducts = async () => {
        const data = await fetchAllProducts();
        setCartItems(data);
    }

    const removeItem = (id:string) => {
        //@ts-ignore
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    useEffect(() => {
        getAllProducts();

    }, []);

    return (
        <div>
            <Navbar isOnMainPage={false} />
            <ProductList removeItem={removeItem} className={"cart"} products={cartItems} />
            <Footer />
        </div>
    );
};

export default CartPage;