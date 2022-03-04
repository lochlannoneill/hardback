import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar'; 
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
          })
        )
      } else {
        //user is logged out
         dispatch(logout());
      }
    })
  })

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
