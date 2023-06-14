import React, { Component } from 'react'
import firebase from "../fbconfig2"
import Login from '../login';
import { Navigate,Link, useNavigate } from 'react-router-dom';
import Step2 from './step2';
import image from './skills';
import Step3 from './step3';

const skills = Object.keys(image);

export default class Step1 extends Component {
  state = {completed1:''}
  techno = []
  
  tech = {tech:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
  db = firebase.firestore();   
  handleClicks = (e)=>{
      
      this.db.collection('users').doc(this.uid).update(this.tech);
      this.setState({completed1:'1'});
      console.log(this.state);
  }
  uid = this.props.ans;
  handleChanges = (e) =>{
    console.log("click");
    e.preventDefault();
    console.log(this.tech);
    document.getElementById(e.target.id).style.border = "solid 2px blue";
    this.tech.tech[e.target.id] = this.tech.tech[e.target.id]===0?e.target.id:0;
    
}
 componentDidMount(){
    this.db.collection('Tech').get().then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
        this.techno = [...this.techno,doc.id];
        console.log(this.techno);
      });
    });
 }
  render() {
    return (
      <div>
        {this.state.completed1===''?
        <div className='container login'>
                            <form className="white">
                                <h5 className="grey-text text-darken-3">Complete Profile :Step 2/4</h5>
                                <br></br>
                                <h5 className="grey-text text-darken-3">Select your Skills</h5>
                                <div className="cont" style={{margin:'20px'}}>
                                {skills.map((item)=>{
                                    return <img onClick={this.handleChanges} id={item} src={image[item]} style={{width:"40px",margin:'20px',cursor:'pointer'}}  alt="" srcset="" />
                                })}
                                </div>
                                
                                {/* <div className="div"><img style={{width:"20px"}} src={logo} alt="" srcset="" /></div> */}
                                 <i  onClick={this.handleClicks} style={{cursor:"pointer"}} class="black-text small material-icons right">arrow-forward</i>
                                       
                            </form>
                        </div>:<Step3 uid={this.uid}/>}
      </div>
    )
  }
}
