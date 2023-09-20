import React, {FC} from 'react';
import DetailsInput from "./ui-components/DetailsInput";
import {Button} from './ui-components/Button';
import {useTranslation} from 'react-i18next';

interface BillingDetailsProps {

}

const BillingDetails:FC<BillingDetailsProps> = (props) => {
    const {t, i18n} = useTranslation();
    return (
        <form className={"billingDetailsCard"}>
            <DetailsInput type={"address"} labelName={t("Address 1")} />
            <DetailsInput type={"zip"} labelName={t("ZipCode")} />
            <DetailsInput type={"card-number"} placeholder={"4400 4302 4242 4242"} labelName={t("Card Number")} />
            <DetailsInput type={"exp-date"} placeholder={"05/28"} labelName={t("Expiry")} />
            <DetailsInput type={"cvc"} placeholder={"123"} labelName={t("CVC")} />
            <Button className={"default"}  buttonText={t("Order")} />
        </form>
    );
};

export default BillingDetails;