import React, {FC, useEffect, useState} from 'react';
import fetchAllProducts from "../api/fetchProducts";
import {Navbar} from "../components/Navbar";
import {Sidebar} from "../components/Sidebar";
import {ResultHeader} from "../components/ui-components/ResultHeader";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import {fetchOneCategory} from "../api/fetchProducts";
import LoginPage from "./LoginPage";

interface MainPageProps {
    isLoggedIn: boolean,
    //@ts-ignore
    setIsLoggedIn,
}



export const MainPage:FC<MainPageProps> = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;

    const [results, setResults] = useState<number>(0)
    //@ts-ignore
    const [products, setProducts] = useState<any[]>([]);

    const getAllProducts = async (limit?:string) => {
        const data = await fetchAllProducts(limit);
        setProducts(data);
        setResults(data.length);
    }

    const getOneCategory = async (category: string) => {
        const data = await fetchOneCategory(category);
        setProducts(data);
        setResults(data.length);
    }


    useEffect(() => {
        getAllProducts();
    }, []);


    return (
        <div>
            {isLoggedIn
                ?  <div>
                    <Navbar  isOnMainPage={true} onClick={() => console.log('Search is clicked')} />
                    <Sidebar getAll={getAllProducts} performAction={getOneCategory} />
                    <ResultHeader searchResultsCount={results}  />
                    <ProductList className={"product"} products={products}/>
                    <Footer />
                </div>
                : <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
        </div>
    );
};

