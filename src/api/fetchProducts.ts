import {db} from '../firebase';
import axios from 'axios';
import { collection, getDocs, query, where, getDoc, addDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';


const fetchAllProducts = async(limit?:string) => {
    try {
        const response = await axios.get('http://localhost:3001/api/products/all');
        const productList = response.data;
        return productList;
    } catch (err: any) {
        console.error(err.message);
        return null;
    }
};

export const fetchOneProduct = async(id:string) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/products/${id}`);
        const product = response.data;
        return product;
    } catch (err: any) {
        console.error(err.message);
        return null;
    }
};

export const fetchOneCategory = async (category: string) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/products/all/categories/${category}`);
        const products = response.data;
        return products;
    } catch (err: any) {
        console.error(err.message);
        return null;
    }
};

export default fetchAllProducts;