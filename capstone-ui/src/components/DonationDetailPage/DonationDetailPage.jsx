import * as React from "react"
import "./DonationDetailPage.css"
import { FaUserCircle } from 'react-icons/fa';
import * as moment from 'moment'

export default function DonationDetailPage({quantity,name,imageUrl,category,
    id,avgRating,totalRatings,donation_desc,location,createdAt, email, 
    donaterUsername,expiration_date, donater_profilePic}) {
    return (
        <div className="donation-details">
            <div className="details">
                <div className="donation-text">
                    <img className="donation-image2" src={imageUrl} alt="" />
                    <p className="donation-name">{name}</p>
                    <p className="donation-expiration"><strong>Exp Date: </strong>{(moment(expiration_date,'YYYY-MM-DD').format()).split('T')[0]}</p>
                </div>
                <div>
                
                </div>
                <button className="donation-btn">View Donation</button>
                <p className="donater-info">
                    <img className="donater-profilepic" src={donater_profilePic}/>
                    <p className="donaterUsername">@{donaterUsername}</p>
                     
                </p>
            </div> 
        </div>
    )
}