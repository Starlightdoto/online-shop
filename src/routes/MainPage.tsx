import React, {FC, useEffect, useState} from 'react';
import fetchAllProducts from "../api/fetchProducts";
import {Navbar} from "../components/Navbar";
import {Sidebar} from "../components/Sidebar";
import {ResultHeader} from "../components/ui-components/ResultHeader";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import {fetchOneCategory} from "../api/fetchProducts";
import LoginPage from "./LoginPage";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface MainPageProps {
    currentUser: any,
    setCurrentUser: any,
    cartItems?: any[],
    setCartItems? :any,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarInfo: string,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,

}


export const MainPage:FC<MainPageProps> = (props) => {
    const { snackBarIsOpen, setSnackBarIsOpen,
            cartItems, setCartItems,
            currentUser, setCurrentUser,
            snackBarInfo, setSnackBarInfo, setSnackBarMessage} = props;
    const [results, setResults] = useState<number>(0)
    //@ts-ignore
    const [products, setProducts] = useState<any[]>([]);


    const handleClick = () => {
        setSnackBarInfo('success');
        setSnackBarMessage('Item has been added to cart')
        setSnackBarIsOpen(true);
    };

    const getAllProducts = async (limit?:string) => {
        const data = await fetchAllProducts(limit);
        setProducts(data ?? []);
    }

    const getOneCategory = async (category: string) => {
        const data = await fetchOneCategory(category);
        setProducts(data?.filter(item => item.category === category) ?? []);
    }

    const searchProduct = async (input:string) => {
        await getAllProducts();
        setProducts(prevState => {
            return prevState.filter(product => {
                const searchedItem = input.toLowerCase();
                return product.title.toLowerCase().includes(searchedItem);
            })
        });
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        setResults(products.length);
    }, [products]);

    return (
        <div>
            { currentUser ?   (<>
                    <Navbar currentUser={currentUser} isOnMainPage={true} onClick={searchProduct} />
                    <Sidebar getAll={getAllProducts} performAction={getOneCategory} />
                    <ResultHeader searchResultsCount={results}  />
                    <ProductList showSnackbar={handleClick} cartItems={cartItems} setCartItems={setCartItems} className={"product"} products={products}/>
                    <Footer />
                </>
                ) : ( <LoginPage setSnackBarMessage={setSnackBarMessage} setSnackBarIsOpen={setSnackBarIsOpen}
                                 currentUser={currentUser}
                                 setCurrentUser={setCurrentUser}
                                 snackBarIsOpen={snackBarIsOpen}
                                 setSnackBarInfo={setSnackBarInfo}
                                 snackBarInfo={snackBarInfo}
            /> )
            }
        </div>


    );
};

