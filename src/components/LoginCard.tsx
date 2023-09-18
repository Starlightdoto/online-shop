import React from 'react';
import DetailsInput from "./ui-components/DetailsInput";
import {Button} from "./ui-components/Button";

const LoginCard = (props:any) => {
    return (
        <div className={"profileCardEdit"}>
            <DetailsInput labelName={"Email"} type={"email"} />
            <DetailsInput labelName={"Password"} type={"password"} />
            <Button className={"default"} buttonText={"Login"} />
        </div>
    );
};

export default LoginCard;