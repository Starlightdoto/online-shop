import React, {useEffect, useState} from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ResultHeader } from './components/ui-components/ResultHeader';
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import fetchData from "./api/fetchProducts";

function App() {
    const [results, setResults] = useState<number>(0)
    const [products, setProducts] = useState([]);


    const sendRequest = async () => {
        const data = await fetchData();
        setProducts(data);
        console.log(products);
    }

    useEffect(() => {
        setResults(products.length);
    }, [products]);



    return (
      <div className="App">
          <Navbar onClick={sendRequest} />
          <Sidebar />
          <ResultHeader searchResultsCount={results}  />
          <ProductList products={products}/>
          <Footer />
       </div>
    );
}

export default App;
