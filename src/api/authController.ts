import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth, db} from "../firebase";
import {doc, setDoc} from "firebase/firestore";
import axios from 'axios';

export const signOutUser = async (setCurrentUser: any) => {
    try {
        await signOut(auth);
        setCurrentUser(null);
    } catch (err:any) {
        console.log(err.message);
    }
};

export const signUpNewUser = async (email: string, password: string, firstName: string, lastName: string, role: string)=> {
    try {
        const response = await axios.post('http://localhost:3001/api/auth/signUp', {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            role: role,
        });
        console.log(response.data)
        const newUser = response.data;
        return newUser;
    } catch (err : any) {
        console.log(err.message);
        return false;
    }
}

export const signInUser = async (setCurrentUser: any, email:string, password: string, setError: any) => {
    try {
        const response = await axios.post('http://localhost:3001/api/auth/signIn', {
            email: email,
            password: password,
        });
        return response.data;
    } catch (err: any) {
        return false;
    }
};

