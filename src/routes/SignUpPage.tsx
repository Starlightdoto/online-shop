import React, {FC} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpCard from "../components/SignUpCard";




const SignUpPage = () => {
    return (
        <div>
            <Navbar isOnMainPage={false} isOnLogin={true}/>
            <SignUpCard/>
            <Footer/>
        </div>
    );
};

export default SignUpPage;