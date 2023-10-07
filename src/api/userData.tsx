import { db, auth } from '../firebase';
import {collection, doc, getDoc, updateDoc, addDoc, getDocs, query, where, deleteDoc} from 'firebase/firestore';

export const fetchCurrentUserData = async () => {
    const user = auth.currentUser;

    if(user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnapshot = await getDoc(userRef);

        if(userSnapshot.exists()) {
            return userSnapshot.data();
        } else {
            console.log('No user data found');
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
};

export const addItemToCart = async (uid: string, item: any) => {
    const userCartItemsCollection = collection(db, 'carts', uid, 'items');
    try {
        const newCartItemRef = await addDoc(userCartItemsCollection, item);
        return true;
    } catch(err: any) {
        return false;
    }

}

export const createNewCart = async (initialItems = [] ) => {
    const user = auth.currentUser;
    const cartsCollection = collection(db, 'carts');

    try {
        const newCartRef = await addDoc(cartsCollection, {
            uid: user?.uid,
            owner: user?.uid,
            items: initialItems,

        });
        return newCartRef;
    } catch (err: any) {
        console.log(err.message);
    }
};

export const fetchUserCartItems = async (uid: string) => {
    const userCartItemsCollection = collection(db, 'carts', uid, 'items');

    try {
        const userCartItemsSnapshot = await getDocs(userCartItemsCollection);
        const itemsList = userCartItemsSnapshot.docs.map(doc => doc.data());
        return itemsList;
    } catch(err: any) {
        console.log(err.message);
    }
};

export const removeItemFromCart = async (uid: string, itemId: string) => {
    const userCartItemsCollection = collection(db, 'carts', uid, 'items');
    const q = query(userCartItemsCollection, where('id', '==', itemId));

    const querySnapshot = await getDocs(q);

    if(!querySnapshot.empty) {
        const itemRef = querySnapshot.docs[0].ref;
        try {
            const result = await deleteDoc(itemRef);
            return  true;
        } catch (err: any) {
            console.log(err.message);
        }
    } else {
        console.log("No matching document!");
        return false;
    }
}