import React, { useEffect, useState } from "react";
import { auth, provider} from "./fbconfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import Home from "./Home";
import Image from "./images/google.png";
import Setting from "./images/developer.png"
import logo from "./logo.svg"
import idea from "./images/idea.gif"
import x from "./images/x.gif"
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
function Login() {
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
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("uid", data.user.uid)
        }).catch((error) => {
            alert(error);
        });
    }
    const handleChange1 = (e) => {
        setusermail(e.target.value);
    }
    const handleChange2 = (e) => {
        setuserpass(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info, pass);
        signInWithEmailAndPassword(auth, info, pass)
            .then((data) => {
                // const user = userCredential.user;
                setValue(data.user.email)
                setname(data.user.uid)
                localStorage.setItem("email", data.user.email)
                localStorage.setItem("uid", data.user.uid)
            }).catch((error) => {
                alert(error);
            });
    }
    // console.log(auth.lastNotifiedUid);
    useEffect(()=>{
        // // console.log(auth.email);
        // setname(localStorage.getItem('uid'))
        // setValue(localStorage.getItem('email'))
    },[])
    return (
        <div className="main">
            <Navbar/>
            {value ? <Home ans={name} /> :
                <div className="loginpage">
                    <div className="row">
                        <img className="col s4" style={{ height: "60px" }} src={logo} alt="" srcset="" />
                        <img className="col " style={{ height: "60px" }} src={x} alt="" srcset="" />
                        <img className="col" style={{ height: "60px" }} src={idea} alt="" srcset="" />
                    </div>

                    <div class="row">

                        <div class="col s3">
                            <img class="container" src={Setting} alt="" srcset="" />
                            <h2 style={{ color: "blue", display: "flex", fontFamily: "monospace" }}>TIN
                                <h2 style={{ color: "black" }}>DEV</h2>
                            </h2>
                        </div>


                        <div class="col s9">


                            <div>
                                <div className='container login'>
                                    <form onSubmit={handleSubmit}>
                                        <h5 className="black-text text-darken-7">Login to TinDev Account</h5>
                                        <br></br>
                                        <div className="input-fields">
                                            <label htmlFor="email" >Email</label>
                                            <input type="email" id='email' onChange={handleChange1} />
                                        </div>

                                        <div className="input-fields">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" id='password' onChange={handleChange2} />
                                        </div>
                                        <div className="input-field">
                                            <i class="small material-icons" style={{ margin: "4px", cursor: "pointer" }} onClick={handleSubmit}>login</i>
                                            {/* <button className="pink btn lighten-1 z-depth-0 offset-2" style={{margin:"3px"}}>Login</button> */}
                                            <img src={Image} style={{ height: "30px", cursor: "pointer" }} alt="" onClick={handleClick} />
                                            {/* <button className="blue btn lighten-1 z-depth-0" onClick={handleClick}></button> */}
                                            <br></br>
                                            <div className="black-text right">
                                                <Link to="./signin">Sign Up for New Account</Link>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>}
        </div>
    )
}
export default Login;
