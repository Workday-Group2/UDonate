import * as React from "react"
import "./AccessForbidden.css"
import Login from "../Login/Login"

export default function AccessForbidden() {
    return (
        <div className="access-forbidden">
            <h1>Please Log In</h1>
            <Login/>
        </div>
    )
}