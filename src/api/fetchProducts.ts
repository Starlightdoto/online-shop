import axios from 'axios';
import {db} from '../firebase';
import { collection, getDocs, addDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';

const fetchAllProducts = async(limit?:string) => {
    const data = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
        .then((response) => {
            return response.data;
        });
    return data;

    // const productsCollection = collection(db, 'products');
    // const productSnapshot = await getDocs(productsCollection);
    // const productList = productSnapshot.docs.map(doc => doc.data());
    // return productList;
}

export const fetchOneProduct = async(id:string) => {
    const product = await axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
            return response.data;
        })
    return product;
}

export const fetchOneCategory = async (category: string) => {
    const categoryProducts = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {
            return response.data;
        })
    return categoryProducts;
}

export default fetchAllProducts;