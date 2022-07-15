import * as React from "react"
import { useState } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Login from "../Login/Login"
// import { AuthContextProvider, useAuthContext } from "../../contexts/auth"
import './App.css';


function App() {
  const [appState, setAppState] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={appState.user}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login setAppState={setAppState} />}/>
            <Route path="/register" element={<Register setAppState={setAppState} />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
