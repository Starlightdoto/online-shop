import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth, db} from "../firebase";
import {doc, setDoc} from "firebase/firestore";

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
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;

        if(user) {
            const userRef = doc(db, "users", user.uid);
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                firstName: firstName,
                lastName: lastName,
                role: role,
            });
            return true;
        }
    } catch (err : any) {
        console.log(err.message);
        return false;
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
};

