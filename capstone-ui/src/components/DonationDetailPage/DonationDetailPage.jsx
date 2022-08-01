import * as React from "react"
import "./DonationDetailPage.css"
import { FaUserCircle } from 'react-icons/fa';
import * as moment from 'moment'

export default function DonationDetailPage({quantity,name,imageUrl,category,
    id,avgRating,totalRatings,donation_desc,location,createdAt, email, donaterUsername,expiration_date}) {
    return (
        <div className="donation-details">
            <div className="details">
                <div className="donation-text">
                    <img className="donation-image2" src={imageUrl} alt="" />
                    <p className="donation-name">{name}</p>
                    <p className="donation-expiration"><strong>Expiration Date: </strong>{(moment(expiration_date,'YYYY-MM-DD').format()).split('T')[0]}</p>
                </div>
                <div>
                
                </div>
                <button className="donation-btn">View Donation</button>
                <p className="donaterUsername">
                    
                    <FaUserCircle className="userpic" size={20}/>
                     @{donaterUsername}
                </p>
            </div> 
        </div>
    )
}