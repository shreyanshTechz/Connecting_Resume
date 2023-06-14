import React from 'react'
import {useState ,useEffect} from "react";
import {storage} from "../fbconfig";
import Step3 from './step3';
import { ref,uploadBytes,listAll,getDownloadURL } from 'firebase/storage';
import Home from '../Home';
export default function Next(props) {
    const [imageUpload,setImageUpload] = useState(null);
    const [imageList , setImageList] = useState([]);
    const [done,setdone] = useState(1);
    console.log(props);
    const imageListref = ref(storage ,"images/");
    const uploadimage = ()=>{
        if (imageUpload==null) return;
        const imageref = ref(storage,`images/${imageUpload.name}`);
        uploadBytes(imageref,imageUpload).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then((url)=>{
            setImageList((prev) => [...prev,url]);
          setdone(0);
          })
          // alert("Uploaded");
        })
    }
  return (
    <div>
      {done===1?
    <div>
      <input type="file" name="trans" id="trans" onChange={(e)=>{
        setImageUpload(e.target.files[0]);
      }} />
      <i onClick={uploadimage()}>Submit</i>
      </div>
      :<Home/>}
    </div>
  )
}
