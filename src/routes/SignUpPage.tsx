import React, {FC} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpCard from "../components/SignUpCard";
import OrderCard from "../components/OrderCard";

interface SignUpPageProps {

}


const SignUpPage:FC<SignUpPageProps> = (props) => {
    return (
        <div>
            <Navbar isOnMainPage={false} isOnLogin={true}/>

            <SignUpCard />
            <Footer/>
        </div>
    );
};

export default SignUpPage;