import React, {useState, FC} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";

interface SingleProductPageProps {

}

const SingleProductPage:FC<SingleProductPageProps> = (props) => {
    return (
        <div>
            <Navbar isOnMainPage={false}  />
            <Footer />
        </div>
    );
};

export default SingleProductPage;