import React, {FC} from 'react';
import {Button} from './ui-components/Button';
import {useTranslation} from 'react-i18next';
import GenericDetailsInput from "./ui-components/GenericDetailsInput";

interface OrdersPageProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    isLoggedIn: boolean,

}

const OrdersPage:FC<OrdersPageProps> = (props) => {
    return (
        <div className={"cartList"}>
        <h3>soon...</h3>
        </div>
    );
};

export default OrdersPage;