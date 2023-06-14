import React, { Component } from 'react'
import firebase from "../fbconfig2"
import Login from '../login';
import { Navigate,Link, useNavigate } from 'react-router-dom';
import Step2 from './step2';
export default class Step1 extends Component {
  state = {institute:'' , github:'',linkendin:'',contact:'',otherlink:'',completed1:'',tech:[],timeline:[]};
  db = firebase.firestore(); 
  
  handleClick = (e)=>{
      // e.preventDefault();
     
      const git = this.state.github;
      const link = this.state.linkendin;
      // let result = this.state.linkendin;
      // console.log(result);
      this.db.collection("users").doc(this.props.ans).update(this.state);
      // if(git==='' || link===''){ alert("Fill the required fields"); return;}
      // this.nav('/step2');
      this.setState({completed1:'1'});
    // return <Navigate to='/'/>
      
  }
  handleChange = (e) =>{
    this.setState({
        [e.target.id] : e.target.value
    })
    console.log(this.state);
}
  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.completed1===''?
        <div className='container login'>
                            <form className="white">
                                <h5 className="grey-text text-darken-3">Complete Profile :Step 1/4</h5>
                                <br></br>
                                <div className="input-fields">
                                    <label htmlFor="institute">Institute Name</label>
                                    <input type="text" id='institute' onChange={this.handleChange}/>
                                </div>
                                <div className="input-fields">
                                    <label htmlFor="github">Github Link</label><i style={{color:"red"}}>&#42;</i>
                                    <input type="text" id='github'  onChange={this.handleChange}/>
                                </div>
                                <div className="input-fields">
                                            <label htmlFor="linkendin">linkendin</label><i style={{color:"red"}}>&#42;</i>
                                            <input type="text" id='linkendin' onChange={this.handleChange}/>
                                        </div>
                                        
                                <div className="input-fields">
                                    <label htmlFor="conatct">Contact Number</label>
                                    <input type="number" id='contact' onChange={this.handleChange}/ >
                                </div>
                                        <div className="input-fields">
                                            <label htmlFor="otherlink">Other Coding Link</label>
                                            <input type="text" id='otherlink' onChange={this.handleChange}/>
                                        </div><br></br>
                                        
                                        <i onClick={this.handleClick} style={{cursor:"pointer"}} class="black-text small material-icons right">arrow-forward</i>
                                        
                            </form>
                        </div>:<Step2 ans={this.props.ans}/>}
      </div>
    )
  }
}
