import {Navbar} from "../components/Navbar";
import {FC, useEffect} from 'react';
import Footer from "../components/Footer";
import LoginPage from "./LoginPage";
import React, {useState} from 'react';
import OrderCard from "../components/OrderCard";
import {Sidebar} from "../components/Sidebar";
import {fetchAllUserOrders} from "../api/userData";
import OrdersList from "../components/OrdersList";

interface OrdersPageProps {
    cartItems: any[],
    setCartItems: any,
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

    const [orders, setOrders] = useState<any[] | null>([]);

    const getAllOrders = async () => {
        const userOrders = await fetchAllUserOrders(currentUser.uid);
        setOrders(userOrders);
    };

    useEffect(()=> {
        getAllOrders();
    }, []);


    return (
        <div>
            {currentUser ? ( <>
                    <Navbar currentUser={currentUser} isOnMainPage={false} />
                    {orders ? <OrdersList orders={orders} /> : <h1>Loading...</h1>}
                    <Footer />

                </>)
                : ( <LoginPage setSnackBarMessage={setSnackBarMessage}
                               snackBarIsOpen={snackBarIsOpen}
                               setSnackBarIsOpen={setSnackBarIsOpen}
                               setSnackBarInfo={setSnackBarInfo}
                               snackBarInfo={snackBarInfo}
                               currentUser={currentUser}
                               setCurrentUser={setCurrentUser} /> )
            }

        </div>
    );
};

export default OrdersPage;