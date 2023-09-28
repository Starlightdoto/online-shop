import axios from 'axios';
import {db} from '../firebase';
import { collection, getDocs, query, where, getDoc, addDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';

const fetchAllProducts = async(limit?:string) => {
    // const data = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
    //     .then((response) => {
    //         return response.data;
    //     });
    // return data;

    const productsCollection = collection(db, 'products');
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
}

export const fetchOneProduct = async(id:string) => {
    // const product = await axios.get(`https://fakestoreapi.com/products/${id}`)
    //     .then((response) => {
    //         return response.data;
    //     })
    // return product;

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


}

export const fetchOneCategory = async (category: string) => {
    const categoryProducts = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {
            return response.data;
        })
    return categoryProducts;
}

export default fetchAllProducts;