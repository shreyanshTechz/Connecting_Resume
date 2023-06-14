import React from 'react'
import firebase from '../fbconfig2'
export default function Navbar() {
  function signout() {
    // firebase.auth().signOut().then(function() {
    //   localStorage.setItem("email", '')
    //             localStorage.setItem("uid",'')
    // }).catch(function(error) {
    // });  
  }
  

  return (
    // <>
      <nav>
<div class="nav-wrapper black">
  <a href="#!" class="brand-logo right"><h5 style={{ color: "Red", display: "flex", fontFamily: "monospace" }}>TIN
                            <h5 style={{ color: "white" }}>DEV</h5>
                        </h5></a>
  <ul class="left">
    
    <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
    <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
    <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
    <li><a onClick={signout()} href='/'><i class="material-icons">logout</i></a></li>
  </ul>
</div>
</nav>
    
  )
}
