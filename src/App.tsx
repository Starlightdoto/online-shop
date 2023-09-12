import React from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ResultHeader } from './components/ui-components/ResultHeader';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <ResultHeader />
    </div>
  );
}

export default App;
