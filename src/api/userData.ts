import { db, auth } from '../firebase';
import axios from 'axios';
import {collection, doc, getDoc, updateDoc, addDoc, getDocs, query, where, deleteDoc, writeBatch, increment} from 'firebase/firestore';

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
    let isItemAvailable = true;
    const userCartItemsCollection = collection(db, 'carts', uid, 'items');
    const allProductsCollection = collection(db, 'products');
    const q = query(userCartItemsCollection, where('id', '==', item.id));
    const qTwo = query(allProductsCollection, where('id', '==', item.id));

    const itemSnapshot = await getDocs(q);
    const productsSnapshot = await getDocs(qTwo);

    try {
        const itemRef = productsSnapshot.docs[0];
        const itemData = itemRef.data();
        const itemQuantity = itemData.quantity;
        itemQuantity > 0 ? isItemAvailable = true : isItemAvailable = false;
    } catch (err: any) {
        console.log(err.message);
    }

    if(isItemAvailable) {
        if(itemSnapshot.empty) {
            try {
                const newCartItemRef = await addDoc(userCartItemsCollection, item);
                return true;
            } catch(err: any) {
                console.log(err.message);
                return false;
            }
        } else {
            const itemRef = itemSnapshot.docs[0].ref;
            try {
                await updateDoc(itemRef, {
                    count: increment(1),
                });
                return true;
            } catch( err: any) {
                console.log(err.message);
                return false;
            }
        }
    } else {
        console.log('Item is currently not available');
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
    const userCartItemsCollection = collection(db, 'carts', uid, 'items',);

    try {
        const userCartItemsSnapshot = await getDocs(userCartItemsCollection);
        const itemsList = userCartItemsSnapshot.docs.map(doc => doc.data());
        const response = await axios.get('http://localhost:3001/api/cart/items');
        console.log(response.data);
        return itemsList;
    } catch(err: any) {
        console.log(err.message);
    }
};

export const removeItemFromCart = async (uid: string, itemId: string) => {
    const userCartItemsCollection = collection(db, 'carts', uid, 'items');
    const q = query(userCartItemsCollection, where('item.id', '==', itemId));

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
};

export const clearUserCart = async (uid: string) => {
    const userCartItemsCollection = collection(db, 'carts', uid, 'items');
    const itemsSnapshot = await getDocs(userCartItemsCollection);

    const batch = writeBatch(db);

    itemsSnapshot.docs.forEach((docSnapshot) => {
        batch.delete(docSnapshot.ref);
    });

    try {
        const result = await batch.commit();
        return true;
    } catch (err: any) {
        console.log(err.message);
        return false;
    }
};

export const createOrderFromCart = async (uid: string, items: any[], totalPrice: number) => {
    const ordersCollection = collection(db, 'orders');

    try {
        const newOrderRef = await addDoc(ordersCollection, {
            owner: uid,
            date: new Date(),
            status: 'new',
            items: items,
            price: totalPrice,
        });
        if(newOrderRef) {
            await updateDoc(doc(db, 'orders', newOrderRef.id), {
                uid: newOrderRef.id,
            });
            items.forEach((item) => {
                decreaseQuantityOfItemAfterOrder(uid, item);
            });
            return true;
        } else {
            return false;
        }
    } catch (err: any) {
        console.log(err.message);
    }
};

export const decreaseQuantityOfItemAfterOrder = async (uid: string, item: any) => {
    const productsCollection = collection(db, 'products');
    const q = query(productsCollection, where('id', '==', item.id));

    try {
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            const productRef = querySnapshot.docs[0].ref;
            await updateDoc(productRef, {
                quantity: increment(-item.count),
            })
        }
        console.log(querySnapshot);
    } catch (err: any) {
        console.log(err.message);
    }
}

export const fetchAllUserOrders = async (uid: string) => {
    const ordersCollection = collection(db, 'orders');
    const q = query(ordersCollection, where('owner', '==', uid));

    try {
        const ordersSnapshot = await getDocs(q);
        const orders = ordersSnapshot.docs.map(doc => doc.data());
        const response = await axios.get('http://localhost:3001/api/orders/all');
        console.log(response.data);
        return orders;
    } catch (err: any) {
        console.log(err.message);
        return null;
    }
};

export const changeCartItemsCount = async (uid: string, itemId: string, operation: string) => {
    const userCartItemsCollection = collection(db, 'carts', uid, 'items');
    const q = query(userCartItemsCollection, where('id', '==', itemId));

    try {
        const itemSnapshot = await getDocs(q);
        if(!itemSnapshot.empty) {
            const itemRef = itemSnapshot.docs[0].ref;
            const changeAmount = operation === 'increase' ? 1 : operation === 'decrease' ? -1 : 0;
            if(changeAmount !== 0) {
                await updateDoc(itemRef, {
                    count: increment(changeAmount)
                });
            }
            return true;
        } else {
            console.log('Item not found!');
            return false;
        }
    } catch(err: any) {
        console.log(err);
        return false;
    }
};

export const fetchUserSingleOrderItems = async (uid: string, orderId: string) => {
    const userOrdersCollection = collection(db, 'orders');
    const q = query(userOrdersCollection, where('uid', '==', orderId));

    try {
        const itemsSnapshot = await getDocs(q);

        if(!itemsSnapshot.empty) {
            const orderDocument = itemsSnapshot.docs[0];
            const orderData = orderDocument.data();
            const orderItems = orderData.items;
            return orderItems;
        } else {
            console.log('No items in this order');
            return null;
        }
    } catch (err: any) {
        console.log(err.message);
        return false;
    }
}