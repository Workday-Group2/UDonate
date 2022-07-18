import * as React from "react"
import "./DonationCard.css"

export default function DonationCard(props) {
    return (
        <div className="DonationCard">
            <br></br>
            <img className="nutrition-image" src={props.imageUrl} alt="" />
            <div className="nutrition-text">
            <p className="nutrition-name">{props.name}</p>
            <p className="nutrition-category not-name">Category: {props.category}</p>
            <p className="nutrition-quantity not-name">Quantity: {props.quantity}</p>
            </div>
        </div>
    )
}