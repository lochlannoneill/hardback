import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="app">
      
      {/* HEADER */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Right Sidebar */}
      </div>

    </div>
  );
}

export default App;
