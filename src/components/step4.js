import React, { Component } from 'react'
import { storage } from "../fbconfig";
import firebase from "../fbconfig2"
import idea from '../images/OIP.jpg'
import tick from '../images/tick.jpg'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Home from '../Home';
import { Link } from 'react-router-dom';
export default class step4 extends Component {

  state = { comp1: '', resume: '' }
  images = '';
  var = idea;
  db = firebase.firestore();
  imageListref = ref(storage, "images/");
  setImageUpload = (x) => {

    this.setState({ resume: x.name });
    const imageref = ref(storage, `doc/${x.name}`);
    uploadBytes(imageref, x).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        x = "https://firebasestorage.googleapis.com/v0/b/blog-ac849.appspot.com/o/images%2F"+ x.name + "?alt=media&token=77ed2eab-f1b7-491a-bc65-3f8ec826957b";
        this.setState({ comp1: '', resume: x.name });
        this.var = tick;
        console.log(x.name);
        console.log(this.state);
        this.db.collection('users').doc(this.props.uid).update(this.state);
        document.getElementById('aj').style.display = 'block';
      })
    })
  }
  fuv = () => {
    document.getElementById('trans').click();
  }
  handleClicks = () => {
    this.setState({ comp1: 'ok' });
  }
  render() {
    console.log(this.props.uid);
    return (
      <div>

        {this.state.comp1 === '' ?
          <div className='container login'>
            <form className="white">
              <h5 className="grey-text text-darken-3">Complete Profile :Step 4/4</h5>
              <br></br>
              <h5 className="grey-text text-darken-3">Upload Your Resume</h5>
              <div className="cont" style={{ margin: '20px' }}>
                {/* {skills.map((item)=>{
                                    return <img onClick={this.handleChanges} id={item} src={image[item]} style={{width:"40px",margin:'20px',cursor:'pointer'}}  alt="" srcset="" />
                                })} */}
              </div>
              <div>
                <input type="file" name="trans" id="trans" hidden onChange={(e) => {
                  this.setImageUpload(e.target.files[0]);
                }} />
                {/* <i onClick={this.uploadimage}>Submit</i> */}
                <br></br>
                <div onClick={this.fuv}><img src={this.var} alt="" srcset="" style={{ width: '100px', height: '100px', borderRadius: '100%', cursor: 'pointer' }} />
                </div>
              </div>
              {/* <div className="div"><img style={{width:"20px"}} src={logo} alt="" srcset="" /></div> */}
              <Link to='home'><i id='aj' style={{ display: 'none', cursor: "pointer" }} class="black-text small material-icons right">arrow-forward</i></Link>
              
            </form>
          </div> : <Home ans={this.props.uid} />}
      </div>
    )
  }
}
