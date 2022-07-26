import * as React from "react"
import BrowseOverview from "../BrowseOverview/BrowseOverview"
import BrowseNew from "../BrowseNew/BrowseNew"
import BrowseDetail from "../BrowseDetail/BrowseDetail"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import {Routes, Route} from 'react-router-dom';
import "./Browse.css"
import BookingConfirmation from "../BookingConfirmation/BookingConfirmation"

export default function Browse(props) {
    return (
        <div className="browse">
            <Routes>
                <Route path="/" element={<BrowseOverview user={props.user} post={props.post}/>}/>
                <Route path="/upload" element={<BrowseNew user={props.user} post={props.post} setPost={props.setPost} addPost={props.addPost} />}/>
                <Route path="/id/:donationId" element={<BrowseDetail user={props.user} />}/>
                <Route path="/donationId/confirmation" element={<BookingConfirmation user={props.user} />}/>
                <Route path="/*" element={<AccessForbidden/>}/>
            </Routes>
        </div>
    )
}