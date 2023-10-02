import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from "../firebase";

export const signOutUser = async (setCurrentUser: any) => {
    try {
        await signOut(auth);
        setCurrentUser(null);
    } catch (err:any) {
        console.log(err.message);
    }
}

export const signInUser = async (setCurrentUser: any, email:string, password: string, setError: any) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setCurrentUser(user);

    } catch (err:any) {
        setError(err.message);
    }
}