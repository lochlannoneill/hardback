import React, { useState } from 'react'
import { auth } from "./firebase"
import { useDispatch } from 'react-redux';
import './Login.css'

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilepic] = useState("");
    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault(); 
    };

    const register = () => {
        if (!name) {
            return alert("Name required");
        }
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name
                        // photoUrl: profilePic
                }))
            })
        }).catch(error => alert(error.message))
    };


    return (
        <div className="login">
            <img src="https://cdn-icons.flaticon.com/png/512/3097/premium/3097042.png?token=exp=1646032092~hmac=4c38364a1cf55133c981333842a6f4e6" alt="" />
        
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.Value)}
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
                    type="text">
                </input>

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password">
                </input>
                
                <button type="submite" onClick={login}>Sign In</button>
            </form>

            <p className="login__register" onClick={register}>Register a new account</p>

        </div>
    )
}

export default Login