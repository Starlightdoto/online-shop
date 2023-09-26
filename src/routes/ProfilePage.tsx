import React, {useState} from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import LoginPage from '../routes/LoginPage';


interface ProfilePageProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    isLoggedIn: boolean,
}

const ProfilePage:FC<ProfilePageProps> = (props) => {
    const {setIsLoggedIn, isLoggedIn} = props;

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
            {isLoggedIn ? ( <>
                <Navbar isOnMainPage={false} />
                <ProfileCard setIsLoggedIn={setIsLoggedIn} changeProfileData={changeProfileData} data={profileData} />
                <Footer />
                </>)
                : ( <LoginPage isLoggedIn={false} setIsLoggedIn={setIsLoggedIn} /> )
            }

        </div>
    );
};

export default ProfilePage;