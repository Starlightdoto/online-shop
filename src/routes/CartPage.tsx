import React from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";

interface CartPageProps {

}

const CartPage:FC<CartPageProps> = (props) => {
    return (
        <div>
            <Navbar isOnMainPage={false} />
            <Footer />
        </div>
    );
};

export default CartPage;