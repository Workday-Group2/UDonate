import * as React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Login from "../Login/Login"
import About from "../About/About"
import Contact from "../Contact/Contact"
import { useAuthContext, AuthContextProvider } from "../../contexts/auth"
import apiClient from "../../services/apiClient"
import './App.css';

export default function AppContainter() {
  return (
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  )
}

function App() {
  const {user, setUser} = useAuthContext()
  const [error, setError] = useState()
  useEffect(() => {
    const fetchUser = async () => {
      const { data, err } = await apiClient.fetchUserFromToken()
      console.log(76,data)
      if (data) setUser(data.user)
      if(error) setError(err)

    }

  const token = localStorage.getItem("token")
  if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login user={user} setUser={setUser} />}/>
            <Route path="/register" element={<Register  user={user} setUser={setUser} />}/>
            <Route path="/about" element={<About  user={user} setUser={setUser}/>}/>
            <Route path="/contact" element={<Contact user={user} setUser={setUser}/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}


