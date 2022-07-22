import * as React from "react"
import "./DonationDetailPage.css"

export default function DonationDetailPage({quantity,name,imageUrl,category,
    id,avgRating,totalRatings,donation_desc,location,createdAt, email}) {
    console.log("image",imageUrl)
    return (
        <div className="donation-detail">
    
            <div className="details">
                <img className="donation-image" src={imageUrl} alt="" />
                <div className="nutrition-text">
                    <p className="nutrition-name">Location: {location}</p>
                    <p className="nutrition-name">Title: {name}</p>
                    <p className="nutrition-category not-name">Category: {category}</p>
                    <p className="nutrition-quantity not-name">Quantity: {quantity}</p>
                </div>
            
            </div> 
        </div>
    )
}