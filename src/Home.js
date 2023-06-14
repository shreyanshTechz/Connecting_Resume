import React, { Component } from 'react'
import firebase from './fbconfig2'
import image from './components/skills';
import { getStorage } from "firebase/storage";
// import { Worker } from '@react-pdf-viewer/core';
// import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default class Home extends Component {
  state = {name:'',email:'',image:'',techno:[],role:'',desc:'',start:'',end:''}
  project = {start:'',end:'',role:'',desc:''}
  value = 1;
  keys = [];
  storage = getStorage();
  db = firebase.firestore();
  uid = localStorage.getItem('uid');
  url = "";
  handleClicks = (e) =>{
    if(this.state.end<this.state.start) alert("Dates Incorrect");
    if(!this.state.role || !this.state.desc || !this.state.start || !this.state.end){
        alert("Please fill the details correctly");
        return;
    }
    e.preventDefault();
    console.log(this.project);
    const el = document.createElement('div');
    el.className = 'timeline-item';
    const el2 = document.createElement('h5');
    const time1 = document.createElement('span');
    time1.className = 'tl-duration';
    time1.innerHTML = this.state.start;
    const time2 = document.createElement('span');
    time2.className = 'tl-duration';
    time2.innerHTML = this.state.end;
    el.appendChild(time1);
    el.appendChild(time2);
    const d = document.createElement('div'); d.className = 'tl-icon';
    el.appendChild(d);
    el2.innerText = this.state.role;
    el.appendChild(el2);
    const rt = document.createElement('i'); rt.className = 'fas fa-briefcase';
    d.appendChild(rt);
    const el3 = document.createElement('p');
    el3.innerText = this.state.desc;
    el2.appendChild(el3);
    const box = document.getElementById('timeline');
    box.appendChild(el);
    this.state.timeline.push({start:this.state.start,end:this.state.end,role:this.state.role,desc:this.state.desc});
    this.db.collection('users').doc(this.uid).update({timeline:this.state.timeline});
  }
  handleChange = (e) =>{
    this.setState({
        [e.target.id] : e.target.value
    })
}
    display = (e)=>{
        const c = document.getElementById('times');
        const d = document.getElementById('plus');
        const neg = document.getElementById('minus');
        if(!d){ neg.innerHTML = 'add'; neg.id = 'plus'; c.classList.add('hidden');}
        else{ d.innerHTML = 'remove'; d.id ='minus'; c.classList.remove('hidden');}
        

    }
componentDidMount() {
    this.db.collection('users').doc(this.uid).get().then((docRef)=>this.setState(docRef.data())).then(console.log(this.state));
}
  
  render() {
    return (
      <>
       <div className="dic">
       <section class="header-content">
       <div class="left-header">
           <div class="h-shape"></div>
           <div class="image">
               <img id='myimg' src={this.state.url} alt=""/>
           </div>
       </div>
       
       
       <div class="right-header">
           <h1 class="name" style={{color:'black'}}>
               Hi I'm <span>{this.state.name}.</span>
               A Developer.
           </h1>
           <div class="btn-con">
               <a onClick={this.click} rel='noreferrer' download="proposed_file_name" class="main-btn" style={{color:'black'}}>
                   <span class="btn-text" >Download CV</span>
                   
                   <span class="btn-icon"><i class="fas fa-download"></i></span>
               </a>
           </div>
       </div>
        </section>
        <section class="containers about" id="about">
            <div class="main-title">
                <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
            </div>
            <div class="about-container">
                <div class="left-about">
                    <h4>Information About me</h4>
                    <p>
                       {this.state.about}
                    </p>
                    <div class="btn-con">
                    <a href={this.state.resume} target='_blank' rel='noreferrer' download="proposed_file_name" class="main-btn" style={{color:'black'}}>
                   <span class="btn-text white-text" >Download CV</span>
                   
                   <span class="btn-icon"><i class="fas fa-download"></i></span>
               </a>
                    </div>
                </div>
                
                <div class="right-about">
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">0</p>
                            <p class="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">0</p>
                            <p class="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">0</p>
                            <p class="small-text">Happy <br /> Clients</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">0</p>
                            <p class="small-text">Customer <br /> reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-stats">
            <div class="main-title">
                <h2>MY <span>SKILLS</span><span class="bg-text">my stats</span></h2>
            </div>
                <div class="progress-bars" style={{margin:"6vh"}}>
                {(this.state.tech)?this.state.tech.map((item)=>{
              if(item)
                return(
                  <div class="progress-bar">
                        <p class="prog-title"><img onClick={this.handleChanges} id={item} alt='' src={image[item]} style={{width:"7vw",height:'7vw',margin:'20px',cursor:'pointer',borderRadius:'100%'}}/></p>
                    </div> 
                )
                return <></>
            }):<div></div>}
                </div>
            </div>
  
            


            <h4 class="stat-title">My Timeline</h4>
            <div class="timeline" id='timeline'>
            {(this.state.timeline)?this.state.timeline.map((item)=>{
              if(item)
                return(
                    <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    
                        <span className='tl-duration' >{item.start}</span>
                        <span className='tl-duration'>{item.end}</span>
                    
                        <h5>
                            {item.role}
                            <p>{item.desc}</p>
                        </h5>
                    </div>
                )
                return <></>
            }):<div></div>}
            </div>
            <div className="timeline">
            <i id='plus' onClick={this.display} style={{cursor:"pointer",marginTop:'1rem',alignSelf:'flex-end'}} className='class="white-text large material-icons right'>add</i>
            <div class="timeline-item hidden" id='times'>
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <div className="div"><p class="tl-duration">Start</p>
                    <input class="tl-duration" style={{color:'white', width:'50%',margin:'1rem'}} id='start' onChange={this.handleChange} type='date' placeholder='start'/>
                    </div>
                    <div className="div"><p class="tl-duration">Start</p>
                    <input class="tl-duration" style={{color:'white', width:'50%',margin:'1rem'}} id='end' onChange={this.handleChange} type='date' placeholder='start'/>
                    </div>
                    
                        
                    <input style={{color:'white', width:'50%',margin:'1rem'}} type='text' id='role' onChange={this.handleChange} placeholder='Company Name'/>
                    <p>
                    <input style={{color:'white', width:'50%',margin:'1rem'}} type='text' id='desc' onChange={this.handleChange} placeholder='Enter your Role'/>
                       
                    </p>
                    <i onClick={this.handleClicks} style={{cursor:"pointer",marginTop:'1rem',alignSelf:'flex-end', border:'2px solid'}} class="white-text small material-icons right">add</i>
                    
            </div>
            </div>
            
                
            
        </section>
        <section class="containers" id="portfolio">
            <div class="main-title">
                <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
            </div>
            <p class="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div class="portfolios">
                <div class="portfolio-item">
                    <div class="image">
                    <a href="iop" class="icon">
                        <i class="fab fa-plus"></i>
                    </a>
                        <img src="https://pngimg.com/uploads/plus/plus_PNG37.png" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>ADD PROJECTS</h3>
                        <input style={{color:'white', width:'80%',margin:'3rem'}} type='text' placeholder='ENTER YOUR PROJECT TITLE'/>
                        <div class="icons">
                            <a href="git" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="beha" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="you" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                        {/* <i onClick={this.handleClicks} style={{cursor:"pointer",marginTop:'1rem',alignSelf:'flex-end'}} class="white-text small material-icons right">add</i> */}

                    </div>
                    
                    {/* <i  onClick={this.handleClicks} style={{cursor:"pointer"}} class="black-text small material-icons right">arrow-forward</i> */}
                                 
                </div>
                
            </div>
        </section>
       
        <section class="containers contact" id="contact">
            <div class="contact-container">
                <div class="main-title">
                    <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                </div>
                <div class="contact-content-con">
                    <div class="left-contact">
                        <h4>Contact me here</h4>
                        
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                   {this.state.location}
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>{this.state.email}</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Education</span>
                                </div>
                                <p>
                                    <span>{this.state.institute}</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>{this.state.contact}</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>Engilsh</span>
                                </p>
                            </div>
                        </div>
                        <div class="contact-icons">
                            <div class="contact-icon">
                                <a href="www.facebook.com" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href={this.state.linkendin} rel='noreferrer' target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href={this.state.github} target="_blank" rel='noreferrer'>
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href={this.state.youtube} target="_blank" rel='noreferrer'>
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div></div>          
     
     </section>
       </div>
       
      </>
    )
  }
}
