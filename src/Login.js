import React, { useState } from 'react'
import { auth } from "./firebase"
import { useDispatch } from 'react-redux'
import { login } from "./features/userSlice"
import './Login.css'

function Login() {
    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [sname, setSname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [profilePic, setProfilepic] = useState("");
    const dispatch = useDispatch();

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
                    })
                )                 
            })

    };

    const register = () => {
        if (!fname) return alert("First name required");
        if (!sname) return alert("Surname required");
        // if (!email) return alert("Email Required");
        // if (!password) return alert("Password required");
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    firstname: fname,
                    surname: sname,
                    // photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        firstname: fname,
                        surname: sname
                        // photoUrl: profilePic
                }))
            })
        })
        .catch((error) => alert(error))
    };


    return (
        <div className="login">
            <img src="https://i.imgur.com/uDiroex.png" alt="" />
            <h2>Hardback</h2>
            <h4>A social media platform for education.</h4>

            <form>
                <input
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="First Name (register only)"
                    type="text">
                </input>

                <input
                    value={sname}
                    onChange={(e) => setSname(e.target.value)}
                    placeholder="Surname (register only)"
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
                
                <button type="submit" onClick={loginToApp}>Log In</button>
            </form>

            <p className="login__register" onClick={register}>Register a new account</p>

        </div>
    )
}

export default Login