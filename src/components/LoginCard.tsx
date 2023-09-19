import React, {FC} from 'react';
import DetailsInput from "./ui-components/DetailsInput";
import {Button} from "./ui-components/Button";

interface LoginCardProps {
    isLoggedIn: boolean,
    //@ts-ignore
    setIsLoggedIn,
}

const LoginCard:FC<LoginCardProps> = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;
    return (
        <div className={"profileCardEdit"}>
            <DetailsInput placeholder={"example@email.com"} labelName={"Email"} type={"email"} />
            <DetailsInput labelName={"Password"} type={"password"} />
            <Button onClick={ ()=> setIsLoggedIn(!isLoggedIn) } className={"default"} buttonText={"Login"} />
        </div>
    );
};

export default LoginCard;