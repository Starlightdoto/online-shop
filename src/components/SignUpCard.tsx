import React, {FC, useState} from 'react';
import {Button} from "./ui-components/Button";
import GenericDetailsInput from "./ui-components/GenericDetailsInput";
import {useTranslation} from 'react-i18next';

interface SignUpCardProps {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword:React.Dispatch<React.SetStateAction<string>>,
    setFirstName:React.Dispatch<React.SetStateAction<string>>,
    setLastName:React.Dispatch<React.SetStateAction<string>>,
    // @ts-ignore
    signUpUser,
}

const SignUpCard:FC<SignUpCardProps> = (props) => {
    const { email,
            password,
            setEmail,
            setPassword,
            signUpUser, firstName, lastName, setLastName, setFirstName} = props;
    const {t, i18n} = useTranslation();


    return (
        <div className={"profileCardEdit"}>
            <GenericDetailsInput signUpData={password} setSignUpData={setFirstName} labelName={("First Name")} type={"fName"} />
            <GenericDetailsInput signUpData={password} setSignUpData={setLastName} labelName={("Last Name")} type={"lName"} />
            <GenericDetailsInput signUpData={email} setSignUpData={setEmail}  placeholder={"example@email.com"} labelName={("Email")} type={"email"} />
            <GenericDetailsInput signUpData={password} setSignUpData={setPassword} labelName={("Password")} type={"password"} />
            <Button onClick={signUpUser}  className={"default"} buttonText={t("Sign Up")}/>
        </div>
    );
};

export default SignUpCard;