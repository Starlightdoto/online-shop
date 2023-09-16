
import { initializeApp } from "firebase/app";
import { getFirestore,  collection, getDocs } from 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBqPZdtUNw7SXdFtRgfm49puuGVEpHvTDk",
    authDomain: "quickshop-ca209.firebaseapp.com",
    projectId: "quickshop-ca209",
    storageBucket: "quickshop-ca209.appspot.com",
    messagingSenderId: "139663459486",
    appId: "1:139663459486:web:f5e06dd65d637f42a2a78f",
    measurementId: "G-G005BMXH5S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const products = collection(db, 'products');

