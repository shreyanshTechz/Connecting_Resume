import React, { Component } from 'react'
import Next from './Next'
import { storage } from "../fbconfig";
import firebase from "../fbconfig2"
import Step4 from './step4';
import idea from '../images/science.png'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import Home from '../Home';
export default class Step3 extends Component {

  state = { comp1: '', image: '' }
  images = '';
  var = idea;
  db = firebase.firestore();
  imageListref = ref(storage, "images/");
  setImageUpload = (x) => {

    this.setState({ image: x.name });
    const imageref = ref(storage, `images/${x.name}`);
    uploadBytes(imageref, x).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        this.setState({ comp1: '', image: url });
        this.var = url;
        console.log(url);
        console.log(this.state);
        this.db.collection('users').doc(this.props.uid).update({url:url});
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
              <h5 className="grey-text text-darken-3">Complete Profile :Step 3/4</h5>
              <br></br>
              <h5 className="grey-text text-darken-3">Upload Your Profile Image</h5>
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
              <i id='aj' onClick={this.handleClicks} style={{ display: 'none', cursor: "pointer" }} class="black-text small material-icons right">arrow-forward</i>
             
            </form>
          </div> : <Step4 uid={this.props.uid} />}
      </div>
    )
  }
}
