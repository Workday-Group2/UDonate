import * as React from "react"
import "./AccessForbidden.css"
import Login from "../Login/Login"

export default function AccessForbidden() {
    return (
        <div className="access-forbidden">
            <h1>AccessForbidden</h1>
            <Login/>
        </div>
    )
}