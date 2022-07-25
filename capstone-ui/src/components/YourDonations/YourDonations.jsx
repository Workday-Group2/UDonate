import React from 'react'
import "./YourDonations.css"

export default function YourDonations(props) {
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

// key={item.id} quantity={item.quantity} name={item.name} 
// imageUrl={item.imageUrl} donation_desc={item.donation_desc} location={item.location}
// category={item.category}
