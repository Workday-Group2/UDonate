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

  // const lastSegment = last[last.length-1] //id


  // if (lastSegment) {
  //     return (
  //         <div>

  //             <DonationDetailPage category={category} id = {id} imageUrl={imageUrl} name={name}
  //              quantity={quantity} createdAt={createdAt} avgRating={avgRating}
  //              totalRatings={totalRatings} donation_desc={donation_desc} location={location} createdAt={createdAt}/>
  //         </div>

  //     )
  // } else {
  return (
    <div className="DonationCard">
      <div className="container">
        <div className="title">
            <h1>Donation Detail</h1>
        </div>   
        <div className="picZommer">   
            <img className="donation-image" src={imageUrl} alt="" />
        </div>
        <div className="cold-md-6">
            <div className="_product-detail-content">
                <div className="info-card">
                    <p className="donation-name">Title: {name}</p>
                    <div class="_p-features">
                        <span> Description About this product: </span>
                        {donation_desc}
                        <p className="donation-location">Location: {location}</p>
                        <p className="nutrition-email">Donator Email: {email}</p>
                        <p className="donation-quantity">Quantity: {quantity}</p>
                        <p className="nutrition-create">Posted on: {created_at}</p>
                    </div>
               
                </div>
            </div>
            
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
