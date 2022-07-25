import * as React from "react"
import "./BrowseNew.css"
import NewPostForm from "../NewPostForm/NewPostForm"

export default function BrowseNew(props) {
    return (
        <div className="Browse-New">
            <NewPostForm user = {props.user} post={props.post} setPost={props.setPost} addPost={props.addPost}/>
        </div>
    )
}