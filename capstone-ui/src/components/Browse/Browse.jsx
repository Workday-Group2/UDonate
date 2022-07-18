import * as React from "react"
import BrowseOverview from "../BrowseOverview/BrowseOverview"
import BrowseNew from "../BrowseNew/BrowseNew"
import BrowseDetail from "../BrowseDetail/BrowseDetail"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import {Routes, Route} from 'react-router-dom';
import "./Browse.css"

export default function Browse(props) {
    return (
        <div className="browse">
            <h1>Browse</h1>
            <Routes>
                <Route path="/" element={<BrowseOverview user={props.user} post={props.post}/>}/>
                <Route path="/create" element={<BrowseNew user={props.user} fruit={props.post} setFruit={props.setPost} addPost={props.addPost} />}/>
                <Route path="/id/:donationId" element={<BrowseDetail user={props.user} />}/>
                <Route path="/*" element={<AccessForbidden/>}/>
            </Routes>
        </div>
    )
}