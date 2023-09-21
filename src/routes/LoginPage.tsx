import React, {FC} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";


interface LoginPageProps {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
}

const LoginPage:FC<LoginPageProps> = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;
    return (
        <div>
            <Navbar isOnMainPage={false} isOnLogin={isLoggedIn} />
            <LoginCard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Footer />
        </div>


    );
};

export default LoginPage;