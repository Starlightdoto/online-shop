import { db, auth } from '../firebase';
import {doc, getDoc, updateDoc } from 'firebase/firestore';

export const fetchCurrentUserData = async () => {
    const user = auth.currentUser;

    if(user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnapshot = await getDoc(userRef);

        if(userSnapshot.exists()) {
            return userSnapshot.data();
        } else {
            console.log('No use data found');
            return null;
        }
    } else {
        console.log('You are not signed in');
        return null;
    }
};

export const updateUserData = async (uid: any,updatedData: any) => {
    const userRef = doc(db, 'users', uid);

    try {
        await updateDoc(userRef, updatedData);
        return true;
    } catch(err: any) {
        console.log(err.message);
        return false;
    }
}