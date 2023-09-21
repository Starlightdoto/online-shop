import React, {FC, useEffect, useState} from 'react';
import fetchAllProducts from "../api/fetchProducts";
import {Navbar} from "../components/Navbar";
import {Sidebar} from "../components/Sidebar";
import {ResultHeader} from "../components/ui-components/ResultHeader";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import {fetchOneCategory} from "../api/fetchProducts";
import LoginPage from "./LoginPage";
import {Link} from "react-router-dom";

interface MainPageProps {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
}



export const MainPage:FC<MainPageProps> = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;

    const [results, setResults] = useState<number>(0)
    //@ts-ignore
    const [products, setProducts] = useState<any[]>([]);


    const getAllProducts = async (limit?:string) => {
        const data = await fetchAllProducts(limit);
        setProducts(data);
    }

    const getOneCategory = async (category: string) => {
        const data = await fetchOneCategory(category);
        setProducts(data);
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
            {isLoggedIn ?  (<>
                    <Navbar isOnMainPage={true} onClick={searchProduct} />
                    <Sidebar getAll={getAllProducts} performAction={getOneCategory} />
                    <ResultHeader searchResultsCount={results}  />
                    <ProductList className={"product"} products={products}/>
                    <Footer />
                </>
                ) : ( <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> )
            }
        </div>


    );
};

