import * as React from "react"
import "./DonationDetailPage.css"

export default function DonationDetailPage({quantity,name,imageUrl,category,
    id,avgRating,totalRatings,donation_desc,location,createdAt, email}) {
    console.log("image",imageUrl)
    return (
        <div className="donation-detail">
            <div className="details">
                <div className="nutrition-text">
                    <img className="donation-image2" src={imageUrl} alt="" />
                    {/* <p className="nutrition-name">Location: {location}</p> */}
                    <p className="nutrition-name">{name}</p>
                    <p className="card__description">{donation_desc}</p>
                    {/* <p className="nutrition-category not-name">Category: {category}</p>
                    <p className="nutrition-quantity not-name">Quantity: {quantity}</p> */}
                </div>
                <button className="donation-btn">View Donation</button>
            </div> 
        </div>
    )
}