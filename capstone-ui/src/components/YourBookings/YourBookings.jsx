import React from 'react'
import { useState, useEffect } from "react"
import apiClient from "../../services/apiClient"
import "./YourBookings.css"
import RatingsPage from "../RatingsPage/RatingsPage"

export default function YourBookings(props) {
  console.log('props!!!: ', props);
  const [isRating, setIsRating] = useState(false) // rating state of donation
  const handleRatingClick = () => {
    setIsRating(true)
  }
  return (
    <div className="yourdonation">
      <div className="donation-details">
      <div className="details">
        <RatingsPage  isOpen={isRating} toggleModal={() => setIsRating(false)} 
         userId={props.userId} donation_id={props.donation_id} donaterEmail={props.donaterEmail}/>
        <img className="donation-image" src={props.imageUrl} alt="" />
        <p className="donation-name">{props.name}</p>
        <p>Donaters Email: {props.donaterEmail}</p>
        <p>Quantity: {props.quantity}</p>
        <p className="card__description">Description: {props.donation_desc}</p>
        <p>Location: {props.location}</p>
        <p>Category: {props.category}</p>

        <button className="rateButton" onClick={handleRatingClick} >Rate</button>
      </div>
      
    </div>
    </div>
  )
}

 