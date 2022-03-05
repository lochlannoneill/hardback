import React, { useState } from 'react'
import { auth } from "./firebase"
import { useDispatch } from 'react-redux'
import { login } from "./features/userSlice"
import './Login.css'

function Login() {
    const [firstname, setFname] = useState("");
    const [surname, setSname] = useState("");
    const [pic, setPic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [profilePic, setProfilepic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!firstname) return alert("First name required");
        if (!surname) return alert("Surname required");
        // if (!email) return alert("Email Required");
        // if (!password) return alert("Password required");
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    firstname: firstname,
                    surname: surname,
                    picture: pic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        firstname: firstname,
                        surname: surname,
                        picture: pic
                }))
            })
        })
        .catch((error) => alert(error))
    };

    const loginToApp = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        uid: userAuth.user.uid,
                        email: userAuth.user.email,
                        firstname: userAuth.user.firstname,
                        lastname: userAuth.user.lastname,
                        picture: userAuth.user.picture,
                    })
                )                 
            })

    };


    return (
        <div className="login">
            <img src="https://i.imgur.com/uDiroex.png" alt="" />
            <h2>Hardback</h2>
            <h4>A social media platform for education.</h4>

            <form>
                <input
                    value={firstname}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="First Name (register required)"
                    type="text">
                </input>

                <input
                    value={surname}
                    onChange={(e) => setSname(e.target.value)}
                    placeholder="Surname (register required)"
                    type="text">
                </input>

                {/* <input
                    value={profilePic}
                    onChange={(e) => setProfilepic(e.target.value)}
                    placeholder="Profile Picture Url (optional)"
                    type="text">
                </input> */}
                
                <input
                    value={pic}
                    onChange={(e) => setPic(e.target.value)}
                    placeholder="Picture URL (register optional)"
                    type="text">
                </input>

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
                
                <button type="submit" onClick={loginToApp}>Log In</button>
            </form>

            <p className="login__register" onClick={register}>Register a new account</p>

        </div>
    )
}

export default Login