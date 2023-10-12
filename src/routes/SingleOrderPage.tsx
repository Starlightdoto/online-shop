import React, {FC, useEffect, useState} from 'react';
import ordersList from "../components/OrdersList";
import OrderPage from "../components/OrderCard";
import {Navbar} from "../components/Navbar";
import LoginPage from "./LoginPage";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import {getCurrentId} from "../helpers/getIdForSingleEntityPage";
import {fetchUserSingleOrderItems} from "../api/userData";
import {useTranslation} from 'react-i18next';

interface SingleOrderPageProps {
    currentUser: any,
    setCurrentUser: any,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarInfo: string,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
}


const SingleOrderPage:FC<SingleOrderPageProps> = (props) => {
    const { currentUser, setCurrentUser,
            setSnackBarMessage, snackBarInfo,
            snackBarIsOpen, setSnackBarIsOpen,
            setSnackBarInfo } = props;
    const {t, i18n} = useTranslation();

    const [orderItems, setOrderItems] = useState<any[]>([]);

    const getAllOrderItems = async () => {
        try {
            const items = await fetchUserSingleOrderItems(currentUser.uid, getCurrentId());
            if(items) {
                setOrderItems(items);
            }
        } catch (err: any) {
            setSnackBarInfo('error');
            setSnackBarMessage(t('Something went wrong'));
            setSnackBarIsOpen(true);
            console.log(err.message);
        }
    }
    console.log(orderItems);


    useEffect(() => {
        getAllOrderItems();
    }, [currentUser]);

    return (
        <div>
            {currentUser ? (<>
                    <Navbar currentUser={currentUser} isOnMainPage={false} />
                    <ProductList  className={'singleOrder'} products={orderItems}/>
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