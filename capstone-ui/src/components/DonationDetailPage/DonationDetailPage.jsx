import * as React from "react"
import "./DonationDetailPage.css"

export default function DonationDetailPage({quantity,name,imageUrl,category,
    id,avgRating,totalRatings,donation_desc,location,createdAt, email}) {
    console.log("image",imageUrl)
    return (
        <div className="donation-details">
            <div className="details">
                <div className="donation-text">
                    <img className="donation-image2" src={imageUrl} alt="" />
                    <p className="donation-name">{name}</p>
                    <p className="card__description">{donation_desc}</p>
                </div>
                
                <button className="donation-btn">View Donation</button>
                
            </div> 
        </div>
    )
}