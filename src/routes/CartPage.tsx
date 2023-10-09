import React, {useEffect, useState} from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import BillingDetails from "../components/BillingDetails";
import {useTranslation} from 'react-i18next';
import LoginPage from "./LoginPage";
import {fetchUserCartItems, removeItemFromCart, createOrderFromCart, clearUserCart } from "../api/userData";
import { useNavigate } from "react-router-dom";

interface CartPageProps {
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

const CartPage:FC<CartPageProps> = (props) => {
    const { cartItems, setCartItems,
            currentUser, setCurrentUser,
            snackBarIsOpen, setSnackBarIsOpen,
            snackBarInfo, setSnackBarInfo, setSnackBarMessage} = props;
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState<number>(0);


    const removeItem = async (id:string) => {
        try {
            const result = await removeItemFromCart(currentUser.uid, id);
            if(result) {
                setSnackBarInfo('success');
                setSnackBarMessage('Item has been removed from cart')
                setSnackBarIsOpen(true);
            } else {
                setSnackBarInfo('error');
                setSnackBarMessage('Something went wrong')
                setSnackBarIsOpen(true);
            }
        } catch (err: any) {
            setSnackBarInfo('error');
            setSnackBarMessage('Something went wrong')
            setSnackBarIsOpen(true);
        }
    }

    const fetchCartItems = async () => {
        try {
            const items = await fetchUserCartItems(currentUser.uid);
            if(items) {
                setCartItems(items);
            }
        } catch (err: any) {
            console.log(err.message);
        }
    }

    const createOrder = async () => {
        if(cartItems.length > 0) {
            try {
                const result = await createOrderFromCart(currentUser.uid, cartItems, totalPrice);
                if(result) {
                    setSnackBarInfo('success');
                    setSnackBarMessage(t('Order has been created'));
                    setSnackBarIsOpen(true);
                } else {
                    setSnackBarInfo('error');
                    setSnackBarMessage(t('Something went wrong'));
                    setSnackBarIsOpen(true);
                }
                await clearUserCart(currentUser.uid);
                navigate("/orders");

            } catch (err: any) {
                setSnackBarInfo('error');
                setSnackBarMessage(t('Something went wrong'));
                setSnackBarIsOpen(true);
            }
        }
    };

    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => total += item.price);
        setTotalPrice(Number(total.toFixed(2)));
    };

    useEffect(() => {
        fetchCartItems();
        getTotalPrice();
    }, [cartItems]);


    return (
        <div>
            {currentUser ? (<>
                <Navbar currentUser={currentUser} isOnMainPage={false} />
                {cartItems.length !== 0 ?
                    <ProductList removeItem={removeItem} className={"cart"} products={cartItems} />
                    : <h1 style={{margin:"30px"}}>{t('Your cart is empty')}</h1>
                }
                <BillingDetails createOrder={createOrder} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                <Footer />
              </>  ) : (<LoginPage setSnackBarMessage={setSnackBarMessage}
                                   snackBarIsOpen={snackBarIsOpen}
                                   setSnackBarIsOpen={setSnackBarIsOpen}
                                   currentUser={currentUser}
                                   setCurrentUser={setCurrentUser}
                                   setSnackBarInfo={setSnackBarInfo}
                                   snackBarInfo={snackBarInfo}
            />)
            }
        </div>
    );
};

export default CartPage;