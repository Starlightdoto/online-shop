import React, {useEffect, useState} from 'react';
import fetchAllProducts from "../api/fetchProducts";
import {Navbar} from "../components/Navbar";
import {Sidebar} from "../components/Sidebar";
import {ResultHeader} from "../components/ui-components/ResultHeader";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import {fetchOneCategory} from "../api/fetchProducts";


export const MainPage = () => {
    const [results, setResults] = useState<number>(0)
    //@ts-ignore
    const [products, setProducts] = useState<any[]>([]);

    const getAllProducts = async () => {
        const data = await fetchAllProducts();
        setProducts(data);
    }

    const getOneCategory = async (category: string) => {
        const data = await fetchOneCategory(category);
        setProducts(data);

    }


    useEffect(() => {
        // getAllProducts();
        setResults(products.length);
    }, [products]);


    return (
        <div>
            <Navbar isOnMainPage={true} onClick={getAllProducts} />
            <Sidebar performAction={getOneCategory} />
            <ResultHeader searchResultsCount={results}  />
            <ProductList className={"product"} products={products}/>
            <Footer />
        </div>
    );
};

