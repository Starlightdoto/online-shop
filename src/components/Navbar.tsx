import React, {FC, useState} from "react";
import { Button } from "./ui-components/Button";
import SearchInput from "./ui-components/SearchInput";
import searchInput from "./ui-components/SearchInput";
// import myImage from "../assets/shop-logo.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProfileIcon from '@mui/icons-material/PersonOutline';


interface NavbarProps {
}

export const Navbar:FC<NavbarProps> = (props) => {

    return (
    <div>
        <nav className={"mainNavbar"}>
            <div className={"leftBox"}>
                <img
                    src="https://img.freepik.com/premium-vector/online-shop-logo-design-template-perfect-ecommerce-sale-store-shop-discount-web_695238-64.jpg"
                    alt="" className={"logo"}/>
                <span className={"mainName"}>QuickShop</span>
            </div>

            <div className={"midBox"}>
                <SearchInput  />
                <Button className={"default"}>Search</Button>
            </div>

            <div className={"rightBox"}>
                <Button className={"default"}><ShoppingCartIcon /></Button>
                <Button className={"default"}><ProfileIcon /></Button>
            </div>
        </nav>
    </div>
    )
};