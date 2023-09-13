import React, {useEffect, useState} from 'react';
import fetchData from "../api/fetchProducts";
import {Navbar} from "../components/Navbar";
import {Sidebar} from "../components/Sidebar";
import {ResultHeader} from "../components/ui-components/ResultHeader";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const MainPage = () => {
    const [results, setResults] = useState<number>(0)
    const [products, setProducts] = useState<any[]>([]);


    const sendRequest = async () => {
        const data = await fetchData();
        setProducts(data);

    }

    useEffect(() => {
        setResults(products.length);
    }, [products]);


    return (
        <div>
            <Navbar isOnMainPage={true} onClick={sendRequest} />
            <Sidebar />
            <ResultHeader searchResultsCount={results}  />
            <ProductList products={products}/>
            <Footer />
        </div>
    );
};

export default MainPage;