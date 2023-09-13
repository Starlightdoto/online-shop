import React from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import {Profiler} from "inspector";
import Footer from "../components/Footer";


interface ProfilePageProps {

}

const ProfilePage:FC<ProfilePageProps> = (props) => {
    return (
        <div>
            <Navbar isOnMainPage={false} />
            <Footer />
        </div>
    );
};

export default ProfilePage;