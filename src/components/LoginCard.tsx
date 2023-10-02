import React, {FC, useState} from 'react';
import {Button} from "./ui-components/Button";
import {useTranslation} from 'react-i18next';
import GenericDetailsInput from "./ui-components/GenericDetailsInput";

interface LoginCardProps {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    signInUser: any,
    email: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}

const LoginCard:FC<LoginCardProps> = (props) => {
    const {t, i18n} = useTranslation();
    const {isLoggedIn, setIsLoggedIn,
           email, signInUser,
           password, setPassword, setEmail} = props;

    return (
        <div className={"profileCardEdit"}>
            <GenericDetailsInput signUpData={email} setSignUpData={setEmail} placeholder={"example@email.com"} labelName={t("Email")} type={"email"} />
            <GenericDetailsInput signUpData={password} setSignUpData={setPassword} labelName={t("Password")} type={"password"} />
            <Button onClick={signInUser} className={"default"} buttonText={t('Login')} />
            <Button className={"default"} buttonText={t('Sign Up')}/>
        </div>
    );
};

export default LoginCard;