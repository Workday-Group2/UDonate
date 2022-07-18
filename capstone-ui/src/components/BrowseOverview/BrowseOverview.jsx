import * as React from "react"
import "./BrowseOverview.css"
import BrowseFeed from "../BrowseFeed/BrowseFeed"

export default function BrowseOverview(props) {
    return (
        <div className="Browse-Overview">
            <BrowseFeed user={props.user} post={props.post}/>
        </div>
    )
}