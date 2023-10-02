import React, {useEffect, useState} from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import LoginPage from '../routes/LoginPage';
import { signOutUser } from "../api/authController";
import {fetchCurrentUserData} from "../api/userData";


interface ProfilePageProps {
    currentUser: any,
    setCurrentUser: any,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarInfo: string,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
}

const ProfilePage:FC<ProfilePageProps> = (props) => {
    const { currentUser, setCurrentUser,
            snackBarIsOpen, setSnackBarIsOpen,
            snackBarInfo, setSnackBarInfo, setSnackBarMessage } = props;

    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
    });

    const userSignOut = async () => {
        try {
            await signOutUser(setCurrentUser);
            setSnackBarInfo('success');
            setSnackBarMessage('Signed out');
            setSnackBarIsOpen(true);
        } catch (err: any) {
            setSnackBarInfo('error');
            setSnackBarMessage(err.message);
            setSnackBarIsOpen(true);
        }
    }

    useEffect(()=> {
        const getData = async () => {
            try {
                const userData = await fetchCurrentUserData();
                if(userData) {

                    setProfileData({ firstName: userData.firstName,
                                           lastName: userData.lastName,
                                           email: userData.email,
                                           address: userData.address || " " });
                } else {
                    console.log('No user data')
                }
            } catch (err: any) {
                console.log(err.message);
            }
        }
        getData();
    }, []);

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
            {currentUser ? ( <>
                <Navbar currentUser={currentUser}  isOnMainPage={false} />
                <ProfileCard userSignOut={userSignOut} changeProfileData={changeProfileData} data={profileData} />
                <Footer />
                </>)
                : ( <LoginPage setSnackBarMessage={setSnackBarMessage} snackBarInfo={snackBarInfo} setSnackBarInfo={setSnackBarInfo}
                               currentUser={currentUser} setCurrentUser={setCurrentUser}
                                setSnackBarIsOpen={setSnackBarIsOpen}  snackBarIsOpen={snackBarIsOpen}
                /> )
            }

        </div>
    );
};

export default ProfilePage;