import * as React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Login from "../Login/Login"
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
