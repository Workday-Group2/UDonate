import React from 'react'
import "./YourBookings.css"

export default function YourBookings(props) {
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

 