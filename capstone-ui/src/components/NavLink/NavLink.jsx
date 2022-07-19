import * as React from "react"
import { Link } from "react-router-dom"
import "./NavLink.css"

export default function NavLink(props) {
    console.log(22,props.user.email)
    return (
        <div className="navlink">
                <h1 className= "btn userEmail">{props.user.email}</h1>
                
                <Link to="/" label="Home" className="btn home">Home</Link>
                <Link to="/about" label="About" className="btn about">About</Link>
                <Link to="/contact" label="Contact" className="btn contact">Contact</Link>
                <Link to="/browse" label="Browse" className="btn browse">Browse</Link>
                <Link to="/upload" label="Upload" className="btn upload">Upload</Link>
                {props.user.email ? (<ul> <li onClick={props.handleLogout}>  <Link to="/" className="btn ghost" >Logout</Link></li> </ul>) : 
                (
                <div>
                    <Link to="/login" label="Login" className="btn ghost">Login</Link>
                    <Link to="/register" label="Sign Up" className="btn primary">Sign Up</Link>
                </div>
                )}
                <Link className = "btn logo"  to="/"> <img alt="website" src="https://www.fbd.org/wp-content/uploads/2021/08/Donate-page-button-1-480x480.png"/></Link> 
            
        </div>
    )
}