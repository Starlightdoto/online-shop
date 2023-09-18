import React, {useEffect} from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import BillingDetails from "../components/BillingDetails";

interface CartPageProps {
    cartItems: any[],
    //@ts-ignore
    setCartItems,
}

const CartPage:FC<CartPageProps> = ({cartItems, setCartItems}) => {

    const removeItem = (id:string) => {
        //@ts-ignore
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    return (
        <div>
            <Navbar isOnMainPage={false} />
            {cartItems.length !== 0 ?
                <ProductList removeItem={removeItem} className={"cart"} products={cartItems} />
                : <h1 style={{margin:"30px"}}>Your cart is empty</h1>
            }
            <BillingDetails />
            <Footer />
        </div>
    );
};

export default CartPage;