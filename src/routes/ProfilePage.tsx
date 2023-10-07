import React, {useEffect, useState} from 'react';
import {Navbar} from "../components/Navbar";
import {FC} from 'react';
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import LoginPage from '../routes/LoginPage';
import { signOutUser } from "../api/authController";
import { fetchCurrentUserData, updateUserData } from "../api/userData";
import {useTranslation} from 'react-i18next';


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
            snackBarInfo, setSnackBarInfo,
            setSnackBarMessage } = props;

    const {t, i18n} = useTranslation();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
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
            setSnackBarMessage(t('Signed out'));
            setSnackBarIsOpen(true);
        } catch (err: any) {
            setSnackBarInfo('error');
            setSnackBarMessage(err.message);
            setSnackBarIsOpen(true);
        }
    };

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
                    console.log(t('No user data'));
                }
            } catch (err: any) {
                console.log(err.message);
            }
        }
        getData();
    }, [profileData]);

    const changeProfileData = async () => {
        const newData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address || null,
        }
        try {
           const result = await updateUserData(currentUser.uid, newData);
           if(result) {
               setSnackBarInfo('success');
               setSnackBarMessage(t('Changes saved'));
               setSnackBarIsOpen(true);
           } else {
               setSnackBarInfo('error');
               setSnackBarMessage(t('Something went wrong'));
               setSnackBarIsOpen(true);
           }
        } catch (err: any) {
            console.log(err.message);
            setSnackBarInfo('error');
            setSnackBarMessage(err.message);
            setSnackBarIsOpen(true);
        }
    }


    return (
        <div>
            {currentUser ? ( <>
                <Navbar currentUser={currentUser}
                        isOnMainPage={false} />
                <ProfileCard firstName={firstName}
                             setFirstName={setFirstName}
                             lastName={lastName}
                             setLastName={setLastName}
                             email={email}
                             setEmail={setEmail}
                             address={address}
                             setAddress={setAddress}
                             userSignOut={userSignOut}
                             changeProfileData={changeProfileData}
                             data={profileData} />
                <Footer />
                </>)
                : ( <LoginPage setSnackBarMessage={setSnackBarMessage}
                               snackBarInfo={snackBarInfo}
                               setSnackBarInfo={setSnackBarInfo}
                               currentUser={currentUser}
                               setCurrentUser={setCurrentUser}
                                setSnackBarIsOpen={setSnackBarIsOpen}
                               snackBarIsOpen={snackBarIsOpen}
                /> )
            }

        </div>
    );
};

export default ProfilePage;