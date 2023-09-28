import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import LoginPage from "./LoginPage";
import React, {useState} from 'react';
import OrderCard from "../components/OrderCard";
import {Sidebar} from "../components/Sidebar";

interface OrdersPageProps {
    cartItems: any[],
    //@ts-ignore
    setCartItems,
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const OrdersPage:FC<OrdersPageProps> = (props) => {
    const {setIsLoggedIn, isLoggedIn} = props;
    return (
        <div>
            {isLoggedIn ? ( <>
                    <Navbar isOnMainPage={false} />
                    <OrderCard setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
                    <Footer />
                    <Sidebar />
                </>)
                : ( <LoginPage isLoggedIn={false} setIsLoggedIn={setIsLoggedIn} /> )
            }

        </div>
    );
};

export default OrdersPage;