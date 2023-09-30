import React, {FC, useState} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpCard from "../components/SignUpCard";
import {auth, db} from '../firebase';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";


interface SignUpPageProps {
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}


const SignUpPage:FC<SignUpPageProps> = (props) => {
    const {setSnackBarIsOpen} = props;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);


    const signUpUser = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;

            if(user) {
                const userRef = doc(db, "users", user.uid);
                await setDoc(userRef, {
                    uid: user.uid,
                    firstName: firstName,
                    lastName: lastName,
                    email: user.email,
                });

                console.log("User has been created!")
                setSnackBarIsOpen(true);
            }
        } catch (err : any) {
            console.error("Something went wrong:", err.message);
            setError(err.message);
        }
    }

    return (
        <div>
            <Navbar isOnMainPage={false} isOnLogin={true}/>
            <SignUpCard firstName={firstName} lastName={lastName}
                        setFirstName={setFirstName} setLastName={setLastName}
                        signUpUser={signUpUser} email={email}
                        password={password} setEmail={setEmail}
                        setPassword={setPassword} />
            <Footer/>
        </div>
    );
};

export default SignUpPage;