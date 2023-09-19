import React, {FC, useState} from "react";
import { Button } from "./ui-components/Button";
import SearchInput from "./ui-components/SearchInput";
import searchInput from "./ui-components/SearchInput";
// import myImage from "../assets/shop-logo.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProfileIcon from '@mui/icons-material/PersonOutline';
import {NavLink} from "react-router-dom";


interface NavbarProps {
    //@ts-ignore
    onClick?,
    isOnMainPage: boolean,
    isOnLogin?: boolean,
}

export const Navbar:FC<NavbarProps> = ({onClick, isOnMainPage,isOnLogin}) => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
    <div>
        <nav className={"mainNavbar"}>
            <div className={"leftBox"}>
                <img
                    src="https://img.freepik.com/premium-vector/online-shop-logo-design-template-perfect-ecommerce-sale-store-shop-discount-web_695238-64.jpg"
                    alt="" className={"logo"}/>
                <NavLink style={{textDecoration:"none", color:"black"}} to={"/"}><span className={"mainName"}>QuickShop</span></NavLink>
            </div>

            {isOnMainPage
                ?
                <div className={"midBox"}>
                    <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}  />
                    <Button onClick={() => onClick(searchValue)} className={"default"}>Search</Button>
                </div>
                : null
            }

            {!isOnLogin
                ?
                <div className={"rightBox"}>
                    <NavLink to={"/cart"}> <Button className={"default"}> <ShoppingCartIcon/> </Button> </NavLink>
                    <NavLink to={"/my-profile"}> <Button className={"default"}> <ProfileIcon/> </Button> </NavLink>
                </div>
                : null
            }
        </nav>
    </div>
    )
};