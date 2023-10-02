import { db, auth } from '../firebase';
import {doc,getDoc} from 'firebase/firestore';

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
}