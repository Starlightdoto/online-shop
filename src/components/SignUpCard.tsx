import React, {FC, useState} from 'react';
import {Button} from "./ui-components/Button";
import GenericDetailsInput from "./ui-components/GenericDetailsInput";
import {useTranslation} from 'react-i18next';

interface SignUpCardProps {

}

const SignUpCard:FC<SignUpCardProps> = (props) => {
    const {t, i18n} = useTranslation();

    return (
        <div className={"profileCardEdit"}>
            <GenericDetailsInput  placeholder={"example@email.com"} labelName={("Email")} type={"email"} />
            <GenericDetailsInput labelName={("Password")} type={"password"} />
            <Button type={"submit"}  className={"default"} buttonText={t("Sign Up")}/>
        </div>
    );
};

export default SignUpCard;