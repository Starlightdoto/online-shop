import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ResultHeader } from './components/ui-components/ResultHeader';
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";


function App() {
    const [results, setResults] = useState<string>('0')



    return (
      <div className="App">
          <Navbar />
          <Sidebar />
          <ResultHeader searchResultsCount={results}  />
          <ProductList />
          <Footer />
       </div>
    );
}

export default App;
