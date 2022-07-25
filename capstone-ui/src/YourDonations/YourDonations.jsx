import React from 'react'

export default function YourDonations(props) {
  return (
    <div>
        <img className="donation-image" src={props.imageUrl} alt="" />
        <p> name: {props.name}</p>
        <p>quantity: {props.quantity}</p>
        <p>donation_desc: {props.donation_desc}</p>
        <p>location: {props.location}</p>
        <p>category: {props.category}</p>
    </div>
  )
}

// key={item.id} quantity={item.quantity} name={item.name} 
// imageUrl={item.imageUrl} donation_desc={item.donation_desc} location={item.location}
// category={item.category}