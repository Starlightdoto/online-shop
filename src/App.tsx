import React from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <h1>Header</h1>
    </div>
  );
}

export default App;
