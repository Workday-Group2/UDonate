import * as React from "react"
import { Link } from "react-router-dom"
import "./NavLink.css"

export default function NavLink(props) {
    
    return (
        <div className="navlink">
                <Link to="/profile"><h1 className={props.user.email ? "btn userEmail" : "ghost"}>{props.user.email}</h1></Link>
                <Link to="/" label="Home" className="btn home">Home</Link>
                <Link to="/resource" label="Resource" className="btn resource">Resource</Link>
                <Link to="/about" label="About" className="btn about">About</Link>
                <Link to="/contact" label="Contact" className="btn contact">Contact</Link>
                <Link to="/browse" label="Browse" className="btn browse">Browse</Link>
                <Link to="/upload" label="Upload" className="btn upload">Upload</Link>
                <Link to="/" label="login" className={props.user.email ? "btn" : "ghost"} onClick={props.handleLogout}>Logout</Link>
                <Link to="/login" label="Login" className={props.user.email ? "ghost" : "btn"}>Login</Link>
                <Link to="/register" label="Sign Up" className={props.user.email ? "ghost" : "btn primary"}>Sign Up</Link>
                <Link className = "btn logo"  to="/"> <img alt="website" src="https://i.ibb.co/GdwHzNZ/imageedit-4-3163864271.png"/></Link> 
            
         </div> 
    )
}

// {props.user.email ? (<ul> <li onClick={props.handleLogout}>  <Link to="/" className="btn ghost">Logout</Link></li> </ul>) : 
//                 (
//                 <div>
//                     <Link to="/login" label="Login" className="btn ghost">Login</Link>
//                     <Link to="/register" label="Sign Up" className="btn primary">Sign Up</Link>
//                 </div>
//                 )}