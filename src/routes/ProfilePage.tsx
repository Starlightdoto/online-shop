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

    const changeProfileData = (field: string, value: string) => {
        setProfileData((prevState:any) => {
            switch(field) {
                case "firstName":
                    return {...prevState, "firstName" : value};
                case "lastName":
                    return {...prevState, "lastName" : value};
                case "email":
                    return {...prevState, "email" : value};
                case "address":
                    return {...prevState, "address" : value};
            }
        });
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