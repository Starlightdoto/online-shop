import React, {FC, useState} from 'react';
import ordersList from "../components/OrdersList";
import OrderPage from "../components/OrderCard";
import {Navbar} from "../components/Navbar";
import LoginPage from "./LoginPage";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

interface SingleOrderPageProps {
    currentUser: any,
    setCurrentUser: any,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarInfo: string,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
    products: any[],
}


const SingleOrderPage:FC<SingleOrderPageProps> = (props) => {
    const { currentUser, setCurrentUser,
            setSnackBarMessage, snackBarInfo,
            snackBarIsOpen, setSnackBarIsOpen,
            setSnackBarInfo, products } = props;
    console.log(products);
    return (
        <div>
            {currentUser ? (<>
                    <Navbar currentUser={currentUser} isOnMainPage={false} />
                    <ProductList  className={'singleOrder'} products={products}/>
                    <Footer />
                </>
                ) : ( <LoginPage setSnackBarMessage={setSnackBarMessage}
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

export default SingleOrderPage;