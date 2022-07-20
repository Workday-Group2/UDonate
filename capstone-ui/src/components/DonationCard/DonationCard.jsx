import * as React from "react"
import { Link } from "react-router-dom"
import DonationDetailPage from "../DonationDetailPage/DonationDetailPage"
import "./DonationCard.css"

export default function DonationCard(props) {
    console.log("props!",props, props.avgRating)
    const url = window.location.pathname
    const last = url.split("/")
    const lastSegment = last[last.length-2]
    if (lastSegment == "id") {
        return (
            <div>
                <h1>{console.log("image",props)}</h1>
                <DonationDetailPage category={props.category} id = {props.id} imageUrl={props.imageUrl} name={props.name} quantity={props.quantity} createdAt={props.createdAt} avgRating={props.avgRating}/>
            </div>
            
        )
    } else {
    return (
        <div className="DonationCard">
            <div className="container">
                <br></br>
                {props.imageUrl ?  <img className="donation-image" src={props.imageUrl} alt="" />  : 
                    (
                        <img className="donation-image" src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"/>
                    )}
                {/* <img className="donation-image" src={props.imageUrl} alt="" /> */}
                <div className="donation-title">
                    <p className="donation-name">{props.name}</p>
                </div>
            </div>
            
            
            {
            /* <div className="nutrition-text">
            <p className="nutrition-name">{props.name}</p>
            <p className="nutrition-category not-name">Category: {props.category}</p>
            <p className="nutrition-quantity not-name">Quantity: {props.quantity}</p>
            </div> */}
        </div>
    )
        }
}