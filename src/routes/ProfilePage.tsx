import React, {useState} from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";


interface ProfilePageProps {

}

const ProfilePage:FC<ProfilePageProps> = (props) => {

    //temporary mock data
    const [profileData, setProfileData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@testmail.com",
        address: "Abq,Street 228",
    });

    //@ts-ignore
    const changeProfileData = ({newFirstName, newLastName, newEmail, newAddress}) => {
        setProfileData((prevState) => {
            return {firstName: newFirstName, lastName: newLastName, email: newEmail, address: newAddress};
        })
    }

    return (
        <div>
            <Navbar isOnMainPage={false} />
            <ProfileCard changeProfileData={changeProfileData} data={profileData} />
            <Footer />
        </div>
    );
};

export default ProfilePage;