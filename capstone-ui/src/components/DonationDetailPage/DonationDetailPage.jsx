import * as React from "react"
import "./DonationDetailPage.css"

export default function DonationDetailPage(props) {
    console.log("imahe",props)
    return (
        <div className="details">
            <h1>Donation Detail</h1>
            <img className="donation-image" src={props.imageUrl} alt="" />
             <div className="nutrition-text">
            <p className="nutrition-name">Title: {props.name}</p>
            <p className="nutrition-category not-name">Category: {props.category}</p>
            <p className="nutrition-quantity not-name">Quantity: {props.quantity}</p>
            
            </div> 
        </div>
    )
}