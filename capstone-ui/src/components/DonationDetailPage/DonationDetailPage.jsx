import * as React from "react"
import "./DonationDetailPage.css"

export default function DonationDetailPage({quantity,name,imageUrl,category,
    id,avgRating,totalRatings,donation_desc,location,createdAt}) {
    console.log("image",imageUrl)
    return (
        <div className="details">
            {/* <h1>Donation Detail</h1> */}
            <img className="donation-image" src={imageUrl} alt="" />
             <div className="nutrition-text">
            <p className="nutrition-name">Title: {name}</p>
            <p className="nutrition-category not-name">Category: {category}</p>
            <p className="nutrition-quantity not-name">Quantity: {quantity}</p>
             
            </div> 
        </div>
    )
}