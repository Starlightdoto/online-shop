import React, {FC, useEffect, useState} from 'react';
import fetchAllProducts from "../api/fetchProducts";
import {Navbar} from "../components/Navbar";
import {Sidebar} from "../components/Sidebar";
import {ResultHeader} from "../components/ui-components/ResultHeader";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import {fetchOneCategory} from "../api/fetchProducts";
import LoginPage from "./LoginPage";
import {useTranslation} from 'react-i18next';
import { addItemToCart } from "../api/userData";

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
    const {t, i18n} = useTranslation();
    const [results, setResults] = useState<number>(0)
    const [products, setProducts] = useState<any[]>([]);


    const handleClick = () => {
        setSnackBarInfo('success');
        setSnackBarMessage(t('Item has been added to cart'))
        setSnackBarIsOpen(true);
    };

    const getAllProducts = async (limit?:string) => {
        const data = await fetchAllProducts(limit);
        let resultingArray = [];
        if(limit) {
            for(let i = 0; i < Number(limit); i++) {
                if(data) {
                    resultingArray[i] = data[i];
                }
            }
            setProducts(resultingArray ?? []);
        } else {
            setProducts(data ?? []);
        }
    };

    const getOneCategory = async (category: string) => {
        const data = await fetchOneCategory(category);
        setProducts(data?.filter(item => item.category === category) ?? []);
    };

    const sortProducts = (sortType: string) => {
        if(sortType === 'price' || sortType === 'rating') {
            const sortedArray = [...products].sort((a,b) => a[sortType] - b[sortType]);
            setProducts(sortedArray);
        } else if (sortType === 'title') {
            const sortedArray = [...products].sort((a,b) => a[sortType].localeCompare(b[sortType]));
            setProducts(sortedArray);
        }
    };

    const searchProduct = async (input:string) => {
        await getAllProducts();
        setProducts(prevState => {
            return prevState.filter(product => {
                const searchedItem = input.toLowerCase();
                return product.title.toLowerCase().includes(searchedItem);
            })
        });
    };

    const addToCart = async (id:string, price: number, description: number, name: string, category: string, imgSrc: string, rating: number) => {
        const newItem = {
            id: id,
            price: price,
            description: description,
            name: name,
            category: category,
            imgSrc: imgSrc,
            rating: rating,
        }
        try {
            const result = await addItemToCart(currentUser.uid, newItem);
            if(result) {
                setSnackBarInfo('success');
                setSnackBarMessage(t('Item has been added to cart'));
                setSnackBarIsOpen(true);
            } else {
                setSnackBarInfo('error');
                setSnackBarMessage(t('Something went wrong'));
                setSnackBarIsOpen(true);
            }
        } catch (err: any) {
            console.log(err.message);
            setSnackBarInfo('error');
            setSnackBarMessage(t('Something went wrong'));
            setSnackBarIsOpen(true);
        }
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
                    <Sidebar getAll={getAllProducts} filterCategoriesFunction={getOneCategory} sortFunction={sortProducts} />
                    <ResultHeader searchResultsCount={results}  />
                    <ProductList addItemToCart={addToCart} showSnackbar={handleClick} cartItems={cartItems} setCartItems={setCartItems} className={"product"} products={products}/>
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

