import React, {FC} from 'react';
import {Button} from "./ui-components/Button";
import {useTranslation} from 'react-i18next';
import GenericDetailsInput from "./ui-components/GenericDetailsInput";

interface LoginCardProps {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
}

const LoginCard:FC<LoginCardProps> = (props) => {
    const {t, i18n} = useTranslation();
    const {isLoggedIn, setIsLoggedIn} = props;
    return (
        <div className={"profileCardEdit"}>
            <GenericDetailsInput placeholder={"example@email.com"} labelName={t("Email")} type={"email"} />
            <GenericDetailsInput labelName={t("Password")} type={"password"} />
            <Button onClick={ ()=> setIsLoggedIn(!isLoggedIn) } className={"default"} buttonText={t('Login')} />
            <Button className={"default"} buttonText={t('Sign Up')}/>
        </div>
    );
};

export default LoginCard;