import React from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";


interface ProfilePageProps {

}

const ProfilePage:FC<ProfilePageProps> = (props) => {
    return (
        <div>
            <Navbar isOnMainPage={false} />
            <ProfileCard />
            <Footer />
        </div>
    );
};

export default ProfilePage;