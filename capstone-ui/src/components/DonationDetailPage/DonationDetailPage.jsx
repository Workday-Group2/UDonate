import * as React from "react"
import "./DonationDetailPage.css"
import { FaUserCircle } from 'react-icons/fa';

export default function DonationDetailPage({quantity,name,imageUrl,category,
    id,avgRating,totalRatings,donation_desc,location,createdAt, email, donaterUsername}) {
    return (
        <div className="donation-details">
            <div className="details">
                <div className="donation-text">
                    <img className="donation-image2" src={imageUrl} alt="" />
                    <p className="donation-name">{name}</p>
                    <p className="card__description">{donation_desc}</p>
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