import * as React from "react"
import { Link } from "react-router-dom"
import "./NavLink.css"

export default function NavLink(props) {
    return (
        <div className="navlink">
            <div className="login-register">
                <Link to="/" label="Home" className="btn home">Home</Link>
                <Link to="/about" label="About" className="btn about">About</Link>
                <Link to="/contact" label="Contact" className="btn contact">Contact</Link>
                {props.user.email ? (<li onClick={props.handleLogout}><Link to="/" className="btn ghost" >Logout</Link></li>) : 
                (
                <div>
                    <Link to="/login" label="Login" className="btn ghost">Login</Link>
                    <Link to="/register" label="Sign Up" className="btn primary">Sign Up</Link>
                </div>
                
                )}
            </div>
        </div>
    )
}