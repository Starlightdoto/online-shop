import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ResultHeader } from './components/ui-components/ResultHeader';
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";


function App() {
    const [results, setResults] = useState<string>('0')

    const products = [1,2,3,4,5,6,7,8,9,10, 12, 13];

    return (
      <div className="App">
          <Navbar />
          <Sidebar />
          <ResultHeader searchResultsCount={results}  />
          <ProductList products={products}/>
          <Footer />
       </div>
    );
}

export default App;
