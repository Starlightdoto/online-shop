import React from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";



const LoginPage = (props:any) => {
    return (
        <div>
            <Navbar isOnMainPage={false} rightBoxPage={false} />
            <LoginCard />
            <Footer />
        </div>
    );
};

export default LoginPage;