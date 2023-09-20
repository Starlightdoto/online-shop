import React, {FC} from 'react';
import DetailsInput from "./ui-components/DetailsInput";
import {Button} from "./ui-components/Button";
import {useTranslation} from 'react-i18next';

interface LoginCardProps {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
}

const LoginCard:FC<LoginCardProps> = (props) => {
    const {t, i18n} = useTranslation();
    const {isLoggedIn, setIsLoggedIn} = props;
    return (
        <div className={"profileCardEdit"}>
            <DetailsInput placeholder={"example@email.com"} labelName={t("Email")} type={"email"} />
            <DetailsInput labelName={t("Password")} type={"password"} />
            <Button onClick={ ()=> setIsLoggedIn(!isLoggedIn) } className={"default"} buttonText={t('Login')} />
        </div>
    );
};

export default LoginCard;