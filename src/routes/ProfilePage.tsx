import React, {useState} from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";


interface ProfilePageProps {

}

const ProfilePage:FC<ProfilePageProps> = (props) => {

    const [profileData, setProfileData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@testmail.com",
        address: "Abq,Street 228",
    });


    return (
        <div>
            <Navbar isOnMainPage={false} />
            <ProfileCard setProfileData={setProfileData} data={profileData} />
            <Footer />
        </div>
    );
};

export default ProfilePage;