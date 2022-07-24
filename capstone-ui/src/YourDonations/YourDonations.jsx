import React from 'react'

export default function YourDonations(props) {
  return (
    <div>
        <p> name: {props.name}</p>
        <p>quantity: {props.quantity}</p>
        <p>imageUrl: {props.imageUrl}</p>
        <p>donation_desc: {props.donation_desc}</p>
        <p>location: {props.location}</p>
        <p>category: {props.category}</p>
    </div>
  )
}

// key={item.id} quantity={item.quantity} name={item.name} 
// imageUrl={item.imageUrl} donation_desc={item.donation_desc} location={item.location}
// category={item.category}