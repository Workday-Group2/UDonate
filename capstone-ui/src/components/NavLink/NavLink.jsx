import * as React from "react"
import { Link } from "react-router-dom"
import { FaUserAlt,FaUserCircle,FaRegUser } from "react-icons/fa";
import { CgProfile} from "react-icons/cg";
import "./NavLink.css"
import hand from "../../media/u-donate.png"

export default function NavLink(props) {

    
    return (
        <div className="navlink">
            
                <Link to="/profile"><h1 className={props.user.email ? "btn userEmail" : "ghost"}> <img className="profile-icon" src={props.user.profile_pic}/></h1>
                <h1 className="link-username"> {props.user.username}</h1></Link>           
                <Link to="/" label="Home" className="btn home">Home</Link>
                <a href="/#about" label="About" className="btn about">About</a>
                <a href="/#contact" label="Contact" className="btn contact">Contact</a>
                <Link to="/resources" label="Resource" className="btn resource">Resources</Link>
                <Link to="/browse" label="Browse" className="btn browse">Browse</Link>
                <Link to="/upload" label="Upload" className="btn upload">Upload</Link>
                <Link to="/" label="login" className={props.user.email ? "btn" : "ghost"} onClick={props.handleLogout}>Logout</Link>
                <Link to="/login" label="Login" className={props.user.email ? "ghost" : "btn"}>Login</Link>
                <Link to="/register" label="Sign Up" className={props.user.email ? "ghost" : "btn primary"}>Sign Up</Link>
                <Link className = "btn logo"  to="/"> <img className="navlink-image" alt="website" src={hand}/></Link> 
            
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