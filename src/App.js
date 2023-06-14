
import SignIn from "./signin"
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login';
import Home from './Home';
function App() {
  // // console.log(auth);
  // const [imageUpload,setImageUpload] = useState(null);
  // const [imageList , setImageList] = useState([]);

  // const imageListref = ref(storage ,"images/");
  // const uploadimage = ()=>{
  //     if (imageUpload==null) return;
  //     const imageref = ref(storage,`images/${imageUpload.name}`);
  //     uploadBytes(imageref,imageUpload).then((snapshot)=>{
  //       getDownloadURL(snapshot.ref).then((url)=>{
  //         setImageList((prev) => [...prev,url]);
  //         // console.log(url);
  //       })
  //     })
  // }
  // useEffect(() => {
  //   listAll(imageListref).then((res)=>{
  //     console.log(res);
  //     res.items.forEach((items)=>{
  //       getDownloadURL(items).then((url)=>{
  //         setImageList((prev) => [...prev,url]);
  //         // console.log(url);
  //       })
  //     })
  //   })
  // }, [])
  
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/signin' element={<SignIn />} />
            <Route exact path='/signin/home' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
