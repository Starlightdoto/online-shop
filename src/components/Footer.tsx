import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';

interface FooterProps {

}

const Footer:FC<FooterProps> = (props) => {
    const {t, i18n} = useTranslation();
    return (
        <footer className={"footer"}>
            <h3>Copyright 2023</h3>
            <p>{t('Contact us')}: <a style={{textDecoration:"none", color:"white" }} href="">test@test.com</a></p>
        </footer>
    );
};

export default Footer;