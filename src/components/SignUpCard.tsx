import React, {FC, useState} from 'react';
import {Button} from "./ui-components/Button";
import GenericDetailsInput from "./ui-components/GenericDetailsInput";
import {useTranslation} from 'react-i18next';

interface SignUpCardProps {
    email: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword:React.Dispatch<React.SetStateAction<string>>,
    setFirstName:React.Dispatch<React.SetStateAction<string>>,
    setLastName:React.Dispatch<React.SetStateAction<string>>,
    signUpUser : any,
    validateEmail: any,
    validatePassword: any,
    validateFirstName: any,
    validateLastName: any,
    emailError: string | null,
    passwordError: string | null,
    firstNameError: string | null,
    lastNameError: string | null,
}

const SignUpCard:FC<SignUpCardProps> = (props) => {
    const { email,
            password,
            setEmail,
            setPassword,
            signUpUser,
            setLastName, setFirstName,
            validateEmail, validatePassword,
            emailError, passwordError,
            firstNameError, validateFirstName, validateLastName, lastNameError } = props;
    const {t, i18n} = useTranslation();


    return (
        <div className={"profileCardEdit"}>
            <GenericDetailsInput onBlurFunction={validateFirstName} signUpData={password} setSignUpData={setFirstName} labelName={("First Name")} type={"fName"} />
            {firstNameError && <span style={{color:'red', display:"block", marginBottom:"3px"}}>{firstNameError}</span>}
            <GenericDetailsInput onBlurFunction={validateLastName} signUpData={password} setSignUpData={setLastName} labelName={("Last Name")} type={"lName"} />
            {lastNameError && <span style={{color:'red', display:"block", marginBottom:"3px"}}>{lastNameError}</span>}
            <GenericDetailsInput onBlurFunction={validateEmail} signUpData={email} setSignUpData={setEmail}  placeholder={"example@email.com"} labelName={("Email")} type={"email"} />
            {emailError && <span style={{color:'red', display:"block", marginBottom:"3px"}}>{emailError}</span>}
            <GenericDetailsInput onBlurFunction={validatePassword} signUpData={password} setSignUpData={setPassword} labelName={("Password")} type={"password"} />
            {passwordError && <span style={{color:'red', display:"block"}}>{passwordError}</span>}
            <Button onClick={signUpUser}  className={"default"} buttonText={t("Sign Up")}/>
        </div>
    );
};

export default SignUpCard;