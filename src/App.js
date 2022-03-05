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

  // persistent login - keep the user logged in when page refresh
  // IDEA - 'stay logged in' checkbox in the login page
  // FIX - fname, sname and picture not updating on state change
  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //           firstname: userAuth.firstname,
  //           surname: userAuth.surname,
  //           picture: userAuth.picture,
  //         })
  //       );
  //     } else {
  //        dispatch(logout());
  //     }
  //   });
  // }, []);

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
