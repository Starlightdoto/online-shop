import React, {useEffect} from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import BillingDetails from "../components/BillingDetails";
import {useTranslation} from 'react-i18next';
import LoginPage from "./LoginPage";

interface CartPageProps {
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

const CartPage:FC<CartPageProps> = (props) => {
    const { cartItems, setCartItems,
            isLoggedIn, setIsLoggedIn,
            snackBarIsOpen, setSnackBarIsOpen,
            snackBarInfo, setSnackBarInfo, setSnackBarMessage} = props;
    const {t, i18n} = useTranslation();

    const removeItem = (id:string) => {
        //@ts-ignore
        setCartItems(cartItems.filter((item) => item.id !== id));
        setSnackBarInfo('success');
        setSnackBarMessage('Item has been removed from cart')
        setSnackBarIsOpen(true);
    }


    return (
        <div>
            {isLoggedIn ? (<>
                <Navbar isOnMainPage={false} />
                {cartItems.length !== 0 ?
                    <ProductList removeItem={removeItem} className={"cart"} products={cartItems} />
                    : <h1 style={{margin:"30px"}}>{t('Your cart is empty')}</h1>
                }
                <BillingDetails />
                <Footer />
              </>  ) : (<LoginPage setSnackBarMessage={setSnackBarMessage} snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen}
                                   isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                                    setSnackBarInfo={setSnackBarInfo} snackBarInfo={snackBarInfo}
            />)
            }
        </div>
    );
};

export default CartPage;