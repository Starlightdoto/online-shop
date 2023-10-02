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
    snackBarInfo: string,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
}

const OrdersPage:FC<OrdersPageProps> = (props) => {
    const { setIsLoggedIn, isLoggedIn,
            snackBarInfo, setSnackBarInfo,
            snackBarIsOpen, setSnackBarIsOpen, setSnackBarMessage} = props;
    return (
        <div>
            {isLoggedIn ? ( <>
                    <Navbar isOnMainPage={false} />
                    <OrderCard setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
                    <Footer />
                    <Sidebar />
                </>)
                : ( <LoginPage setSnackBarMessage={setSnackBarMessage} snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen}
                               setSnackBarInfo={setSnackBarInfo} snackBarInfo={snackBarInfo} isLoggedIn={false} setIsLoggedIn={setIsLoggedIn} /> )
            }

        </div>
    );
};

export default OrdersPage;