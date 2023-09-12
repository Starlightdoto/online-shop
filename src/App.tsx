import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ResultHeader } from './components/ui-components/ResultHeader';


function App() {
    const [header, setHeader] = useState('');

    const changeHeaderText = (newText:string) => {
        setHeader(newText);
    }

    return (
      <div className="App">
          <Navbar changeHeaderText={changeHeaderText} />
          <Sidebar />
          <ResultHeader headerText={header} />
       </div>
    );
}

export default App;
