import * as React from "react";
import { Link } from "react-router-dom";
import DonationDetailPage from "../DonationDetailPage/DonationDetailPage";
import "./DonationCard.css";

export default function DonationCard({
  quantity,
  name,
  imageUrl,
  donation_desc,
  location,
  email,
  created_at,
}) {
  // const url = window.location.pathname //url of web
  // const last = url.split("/")
  // console.log("last",last)
  // const lastSegment = last[last.length-1] //id
  // console.log("last segment",lastSegment)

  // if (lastSegment) {
  //     return (
  //         <div>
  //             <h1>{console.log("image",imageUrl)}</h1>
  //             <DonationDetailPage category={category} id = {id} imageUrl={imageUrl} name={name}
  //              quantity={quantity} createdAt={createdAt} avgRating={avgRating}
  //              totalRatings={totalRatings} donation_desc={donation_desc} location={location} createdAt={createdAt}/>
  //         </div>

  //     )
  // } else {
  return (
    <div className="DonationCard">
      <div className="container">
     
          <img className="donation-image" src={imageUrl} alt="" />
        
        {/* <img className="donation-image" src={props.imageUrl} alt="" /> */}
        <div className="info-card">
          <div className="donation-title">
            <p className="donation-location">Location: {location}</p>
            <p className="nutrition-email">Donator Email: {email}</p>
            <p className="donation-name">Title: {name}</p>
            <p className="donation-quantity">Quantity: {quantity}</p>
            <p className="donation-description">Description: {donation_desc}</p>
            <p className="nutrition-create">Posted on: {created_at}</p>
          </div>
          {/* <div>
                        <p className="donation-description">{donation_desc}</p>
                    </div> */}
        </div>
      </div>

      {/* <div className="nutrition-text">
            <p className="nutrition-name">{props.name}</p>
            <p className="nutrition-category not-name">Category: {props.category}</p>
            <p className="nutrition-quantity not-name">Quantity: {props.quantity}</p>
            </div> */}
    </div>
  );
}
