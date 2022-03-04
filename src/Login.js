import React, { useState } from 'react'
import { auth } from "./firebase"
import { useDispatch } from 'react-redux'
import {login } from "./features/userSlice"
import './Login.css'

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [profilePic, setProfilepic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault(); 
    };

    const register = () => {
        if (!name) return alert("Name required");
        // if (!email) return alert("Email Required");
        // if (!password) return alert("Password required");
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    // photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name //do i need this???
                        // photoUrl: profilePic
                }))
            })
        })
        .catch(error => alert(error))
    };


    return (
        <div className="login">
            <img src="https://cdn-icons.flaticon.com/png/512/3097/premium/3097042.png?token=exp=1646052770~hmac=02f54b7f096571bb47be11c1a990f744" alt="" />
            <h2>Hardback</h2>
            <h4>A social media platform for education.</h4>

            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    type="text">
                </input>

                {/* <input
                    value={profilePic}
                    onChange={(e) => setProfilepic(e.target.value)}
                    placeholder="Profile Picture Url (optional)"
                    type="text">
                </input> */}

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email">
                </input>

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password">
                </input>
                
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p className="login__register" onClick={register}>Register a new account</p>

        </div>
    )
}

export default Login