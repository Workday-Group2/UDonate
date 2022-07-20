import * as React from "react"
import NavLink from "../NavLink/NavLink"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <NavLink user={props.user} handleLogout={props.handleLogout}/>
        </nav>
    )
}