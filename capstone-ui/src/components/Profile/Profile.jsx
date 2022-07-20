import * as React from "react"
import "./Profile.css"
import { Link } from "react-router-dom"

const defaultAvatar =
  "https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg"

const avatarUrl = defaultAvatar
export default function Profile(props) {
    console.log("user",props)
    return (
        <div className="Profile">
            <div className="banner">
                <span>{` `}</span>
            </div>
            <div className="avatar">
                <img src={avatarUrl} alt="profile" />
                <h2 className="full-name">
                    {props.user.first_name}
                    {` `}
                    {props.user.last_name}
                </h2>
            </div>
            <div className="content">
                <h4>Profile Details</h4>
                <span className="info">
                    <span className="label">First Name: </span>
                    <span>{props.user.first_name}</span>
                    <span className="info">
                    <span className="label"> Last Name: </span>
                    <span>{props.user.last_name}</span>
                </span>
                <span className="info">
                    <span className="label"> Username: </span>
                    <span>@{props.user.username}</span>
                </span>
                <span className="info">
                    <span className="label"> Email: </span>
                    <span>{props.user.email}</span>
                </span>
                </span>
            </div>
            <div className="actions">
                <h4>Manage</h4>
                <div className="buttons">
                    <button className="submit-booking" >Your Donations</button>
                    <button className="submit-booking" >Your Bookings</button>

                    {/* <Link>
                        <link buttonType="primary">Your Trips</link>
                    </Link>
                    <Link>
                        <link buttonType="primary">Your Listings</link>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}