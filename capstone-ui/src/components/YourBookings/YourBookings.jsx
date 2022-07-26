import React from 'react'
import "./YourBookings.css"

export default function YourBookings(props) {
  return (
    <div className="yourdonation">
      <div className="donation-details">
      <div className="details">
        <img className="donation-image" src={props.imageUrl} alt="" />
        <p className="donation-name"> Name: {props.name}</p>
        <p>Quantity: {props.quantity}</p>
        <p className="card__description">Description: {props.donation_desc}</p>
        <p>Location: {props.location}</p>
        <p>Category: {props.category}</p>
      </div>
        
    </div>
    </div>
  )
}

 