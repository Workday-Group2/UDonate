import * as React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Login from "../Login/Login"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Browse from "../Browse/Browse"
import NotFound from "../NotFound/NotFound"
import BrowseNew from "../BrowseNew/BrowseNew"
import Footer from "../Footer/Footer"
import Profile from "../Profile/Profile"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import { useAuthContext, AuthContextProvider } from "../../contexts/auth"
import apiClient from "../../services/apiClient"
import './App.css';
import Resource from "../Resource/Resource"
import Donations from "../Donations/Donations"
import Bookings from "../Bookings/Bookings"


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
  const [posts, setPosts] = useState([])
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
  console.log("user!!",user)
  const addPost = (newPost) => {
    setPosts((oldPosts) => [newPost, ...oldPosts])
  }
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
            <Route path="resource" element={<Resource />}/>
            <Route path="/login" element={<Login user={user} setUser={setUser} />}/>
            <Route path="/register" element={<Register  user={user} setUser={setUser} />}/>
            <Route path="/about" element={<About  user={user} setUser={setUser}/>}/>
            <Route path="/contact" element={<Contact user={user} setUser={setUser}/>}/>
            <Route path="/browse/*" element={user?.email ? (<Browse user={user} addPost={addPost} posts = {posts}/>) : (<AccessForbidden/>)}/>
            <Route path="/upload/*" element={user?.email ? (<BrowseNew user={user} addPost={addPost} posts = {posts}/>) : (<AccessForbidden/>)}/>
            <Route path="/profile" element={user?.email ? (<Profile user={user} />) : (<AccessForbidden/>)}/>
            <Route path="/donations" element={user?.email ? (<Donations user={user} />) : (<AccessForbidden/>)}/>
            <Route path="/bookings" element={user?.email ? (<Bookings user={user} />) : (<AccessForbidden/>)}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}


