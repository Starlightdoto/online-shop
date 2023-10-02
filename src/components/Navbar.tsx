import React, {FC, useState} from "react";
import { Button } from "./ui-components/Button";
import SearchInput from "./ui-components/SearchInput";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProfileIcon from '@mui/icons-material/PersonOutline';
import {NavLink} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import LocaleSwitcher from "./ui-components/LocaleSwitcher";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ProfileCard from "./ProfileCard";


interface NavbarProps {
    onClick? : any,
    isOnMainPage: boolean,
    currentUser: any,
}

export const Navbar:FC<NavbarProps> = ({onClick, isOnMainPage,currentUser}) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const {t, i18n} = useTranslation();


    return (
    <div>
        <nav className={"mainNavbar"}>
            <div className={"leftBox"}>
                <img
                    src="https://img.freepik.com/premium-vector/online-shop-logo-design-template-perfect-ecommerce-sale-store-shop-discount-web_695238-64.jpg"
                    alt="" className={"logo"}/>
                <NavLink style={{textDecoration:"none", color:"black"}} to={"/"}><span className={"mainName"}>QuickShop</span></NavLink>
            </div>

            {isOnMainPage ? (
                <div className={"midBox"}>
                    <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}  />
                    <Button onClick={() => {
                        onClick(searchValue);
                        setSearchValue('');
                    }} className={"default"}>{t('Search')}</Button>
                </div>
                ) : null
            }

            {currentUser ? (
                <div className={"rightBox"}>
                    <LocaleSwitcher />
                    <NavLink to={"/cart"}> <Button className={"default"}> <ShoppingCartIcon/> </Button> </NavLink>
                    <NavLink to={"/orders"}> <Button className={"default"}> <RequestQuoteIcon/> </Button> </NavLink>
                    <NavLink to={"/my-profile"}> <Button className={"default"}> <ProfileIcon/> </Button> </NavLink>

                </div>
            ) : null
            }
        </nav>
    </div>
    )
};