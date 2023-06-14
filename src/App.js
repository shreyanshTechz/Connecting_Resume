
import SignIn from "./signin"
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login';
import Home from './Home';
function App() {
 
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
