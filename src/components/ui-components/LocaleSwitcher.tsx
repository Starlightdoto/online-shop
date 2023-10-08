import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from "./Button";
import LanguageIcon from '@mui/icons-material/Language';

const LocaleSwitcher = () => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <Button onClick={toggleLanguage} className={"default"}><LanguageIcon /></Button>
    );
};

export default LocaleSwitcher;