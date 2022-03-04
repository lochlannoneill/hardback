import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar'; 


function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__head">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/* <Widgets> */}
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
