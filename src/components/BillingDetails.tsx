import React, {FC} from 'react';
import DetailsInput from "./ui-components/DetailsInput";
import {Button} from './ui-components/Button';

interface BillingDetailsProps {

}

const BillingDetails:FC<BillingDetailsProps> = (props) => {
    return (
        <form className={"billingDetailsCard"}>
            <DetailsInput type={"address"} labelName={"Address 1"} />
            <DetailsInput type={"zip"} labelName={"ZipCode"} />
            <DetailsInput type={"card-number"} labelName={"Card Number"} />
            <DetailsInput type={"exp-date"} labelName={"Expiry"} />
            <DetailsInput type={"cvc"} labelName={"CVC"} />
            <Button className={"default"} buttonText={"Order"} />
        </form>
    );
};

export default BillingDetails;