import React, {FC} from 'react';
import {Button} from './ui-components/Button';
import {useTranslation} from 'react-i18next';
import GenericDetailsInput from "./ui-components/GenericDetailsInput";

interface BillingDetailsProps {

}

const BillingDetails:FC<BillingDetailsProps> = (props) => {
    const {t, i18n} = useTranslation();
    return (
        <div className={"billingDetailsCard"}>
            <GenericDetailsInput type={"address"} labelName={t("Address 1")} />
            <GenericDetailsInput type={"zip"} labelName={t("ZipCode")} />
            <GenericDetailsInput type={"card-number"} placeholder={"4400 4302 4242 4242"} labelName={t("Card Number")} />
            <GenericDetailsInput type={"exp-date"} placeholder={"05/28"} labelName={t("Expiry")} />
            <GenericDetailsInput type={"cvc"} placeholder={"123"} labelName={t("CVC")} />
            <Button className={"default"}  buttonText={t("Order")} />
        </div>
    );
};

export default BillingDetails;