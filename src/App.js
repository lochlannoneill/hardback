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
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // persistent login - keep the user logged in on refresh
  // IDEA - stay logged in checkbox
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            fname: userAuth.fname,
            sname: userAuth.sname,
          })
        );
      } else {
         dispatch(logout());
      }
    });
  }, []);

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
