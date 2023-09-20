import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from "./Button";

const LocaleSwitcher = () => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <Button onClick={toggleLanguage}  className={"default"} buttonText={t('Language')} />
    );
};

export default LocaleSwitcher;