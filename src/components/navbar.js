import React, { useEffect, useState } from 'react'
import firebase from '../fbconfig2'
export default function Navbar() {

  const [uid,setuid] = useState(null);

  function signout() {
    firebase.auth().signOut().then(function() {
      localStorage.setItem("email", 'out')
                localStorage.setItem("uid",'out')
    }).catch(function(error) {
    });  
  }
  useEffect(() => {
    setuid(localStorage.getItem('email'));
    console.log(uid);
  },)
  

  return (
    // <>
      <nav>
<div class="nav-wrapper black">
  <a href="#!" class="brand-logo right"><h5 style={{ color: "Red", display: "flex", fontFamily: "monospace" }}>TIN
                            <p style={{ color: "white" }}>DEV</p>
                        </h5></a>
                        {uid!=='out' & uid!==''?
  <ul class="left">
    <li><a href="badges.html"><i class="material-icons">edit</i></a></li>
    <li><a href="collapsible.html"><i class="material-icons">notifications</i></a></li>
    <li><a href="mobile.html"><i class="material-icons">people</i></a></li>
    <li><a onClick={()=>signout()} href='/'><i class="material-icons">logout</i></a></li>
  </ul>:<p></p>}
</div>
</nav>
    
  )
}
