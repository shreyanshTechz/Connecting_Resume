import React, { useEffect, useState } from "react";
import { auth, provider, db } from "./fbconfig";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth"
import Home from "./Home";
import Step1 from "./components/step1";
import firebase from "./fbconfig2";
import Image from "./images/google.png"
import login from "./images/log-in.png"
import logo from "./logo.svg"
import idea from "./images/idea.gif"
import x from "./images/x.gif"
import { Link,useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
function SignIn() {
    const db = firebase.firestore();
    const [value, setValue] = useState('');
    const [name, setname] = useState('');
    const [info, setusermail] = useState('');
    // const [name,setusername] = useState('');
    const [pass, setuserpass] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            setname(data.user.uid)
            console.log(data.user);
            db.collection("users").doc(data.user.uid).set({
                name: data.user.displayName,
                email: data.user.email
            })
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("uid", data.user.uid)
        }).catch((error) => {
            alert(error);
        });
    }
    const handleChange1 = (e) => {
        setusermail(e.target.value);
    }
    const handleChange3 = (e) => {
        setname(e.target.value);
        console.log(name);
    }
    const handleChange2 = (e) => {
        setuserpass(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info, pass);
        createUserWithEmailAndPassword(auth, info, pass)
            .then((data) => {
                // const user = userCredential.user;
                setValue(data.user.email)
                setname(data.user.uid)
                db.collection("users").doc(data.user.uid).set({
                    name: name,
                    email: data.user.email
                })
                localStorage.setItem("email", data.user.email)
                localStorage.setItem("uid", data.user.uid)
            }).catch((error) => {
                alert(error);
            });
    }
    console.log(auth.lastNotifiedUid);
    useEffect(()=>{
        // console.log(auth.email);
        // setname(localStorage.getItem('uid'))
        // setValue(localStorage.getItem('email'))
    })
    return (

        <div className="main">
            <Navbar/>
            <div className="row loginpage">
                <img className="col s4" style={{ height: "60px" }} src={logo} alt="" srcset="" />
                <img className="col " style={{ height: "60px" }} src={x} alt="" srcset="" />
                <img className="col" style={{ height: "60px" }} src={idea} alt="" srcset="" />
            </div>
            <div class="row">

                <div class="col s3">
                    <img class="container" src={login} alt="" srcset="" />
                    <h2 style={{ color: "blue", display: "flex", fontFamily: "monospace" }}>TIN
                        <h2 style={{ color: "black" }}>DEV</h2>
                    </h2>
                </div>

                <div class="col s9">
                    {value ? <Step1 ans={name} /> : <div>
                        <div className='container login'>
                            <form onSubmit={handleSubmit} className="white">
                                <h5 className="grey-text text-darken-3">Create Your TinDev Account</h5>
                                <br></br>
                                <div className="input-fields">
                                    <label htmlFor="email" >Email</label>
                                    <input type="email" id='email' onChange={handleChange1} />
                                </div>
                                <div className="input-fields">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id='name' onChange={handleChange3} />
                                </div>
                                <div className="input-fields">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='password' onChange={handleChange2} />
                                </div>
                                <div className="input-field">
                                    <i class="small material-icons" style={{ margin: "4px", cursor: "pointer" }} onClick={handleSubmit}>login</i>
                                    {/* <button className="pink btn lighten-1 z-depth-0" style={{margin:"4px"}}>SignUp</button> */}
                                    <img src={Image} style={{ height: "30px", cursor: "pointer" }} alt="" onClick={handleClick} />
                                    {/* <button className="green btn lighten-1 z-depth-0" onClick={handleClick}>Google</button> */}

                                </div>
                            </form>
                            <div className="black-text right">
                                <Link to="/">Already Have an Account</Link>
                            </div><br></br>
                        </div>
                    </div>}
                </div>
            </div></div>
    )
}
export default SignIn;
