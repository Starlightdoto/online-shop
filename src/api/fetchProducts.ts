import {db} from '../firebase';
import { collection, getDocs, query, where, getDoc, addDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';


const fetchAllProducts = async(limit?:string) => {
    const productsCollection = collection(db, 'products');
    try {
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map(doc => doc.data());
        return productList;
    } catch (e) {
        console.log(e);
    }
};

export const fetchOneProduct = async(id:string) => {
    const productsCollection = collection(db, 'products');
    const q = query(productsCollection, where('id', '==', id));

    const querySnapshot = await getDocs(q);

    if(!querySnapshot.empty) {
        const productDoc = querySnapshot.docs[0];
        return productDoc.data();
    } else {
        console.log("No matching document!");
        return null;
    }
};

export const fetchOneCategory = async (category: string) => {
    const productsCollection = collection(db, 'products');
    try {
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map(doc => doc.data());
        return productList;
    } catch(e) {
        console.log(e);
    }
};

export default fetchAllProducts;