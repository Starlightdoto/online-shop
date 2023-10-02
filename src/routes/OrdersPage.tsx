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
    currentUser: any,
    setCurrentUser: any,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarInfo: string,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
}

const OrdersPage:FC<OrdersPageProps> = (props) => {
    const { currentUser, setCurrentUser ,
            snackBarInfo, setSnackBarInfo,
            snackBarIsOpen, setSnackBarIsOpen, setSnackBarMessage} = props;
    return (
        <div>
            {currentUser ? ( <>
                    <Navbar currentUser={currentUser} isOnMainPage={false} />
                    <OrderCard />
                    <Footer />
                    <Sidebar />
                </>)
                : ( <LoginPage setSnackBarMessage={setSnackBarMessage} snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen}
                               setSnackBarInfo={setSnackBarInfo} snackBarInfo={snackBarInfo} currentUser={currentUser} setCurrentUser={setCurrentUser} /> )
            }

        </div>
    );
};

export default OrdersPage;