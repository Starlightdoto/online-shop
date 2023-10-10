import React, {FC, useState} from 'react';
import {Button} from "./ui-components/Button";
import {useTranslation} from 'react-i18next';
import GenericDetailsInput from "./ui-components/GenericDetailsInput";
import { useNavigate } from "react-router-dom";

interface LoginCardProps {
    signInUser: any,
    email: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    error: string | null,
}

const LoginCard:FC<LoginCardProps> = (props) => {
    const {t, i18n} = useTranslation();
    const { email, signInUser,
           password, setPassword, setEmail, error} = props;
    const navigate = useNavigate();

    return (
        <div className={"profileCardEdit"}>
            <GenericDetailsInput signUpData={email}
                                 setSignUpData={setEmail}
                                 placeholder={"example@email.com"}
                                 labelName={t("Email")}
                                 type={"email"} />
            {error && <span style={{color:'red', display:"block", marginBottom:"3px"}}>{error}</span>}
            <GenericDetailsInput signUpData={password}
                                 setSignUpData={setPassword}
                                 labelName={t("Password")}
                                 type={"password"} />
            {error && <span style={{color:'red', display:"block", marginBottom:"3px"}}>{error}</span>}
            <Button onClick={signInUser} className={"default"} buttonText={t('Login')} />
            <Button onClick={()=> navigate('/sign-up')} className={"default"} buttonText={t('Sign Up')}/>
        </div>
    );
};

export default LoginCard;