import * as React from "react";
import { Link } from "react-router-dom";
import * as moment from 'moment'
import DonationDetailPage from "../DonationDetailPage/DonationDetailPage";
import "./DonationCard.css";

export default function DonationCard({
  quantity,
  name,
  imageUrl,
  donation_desc,
  location,
  username,
  created_at,
  totalRatings,
  avgRating
}) {
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
                    <p className="donation-name"> {name}</p>
                    <div className="_p-features">
                        <span> Description: </span>
                        {donation_desc}
                        <p className="donation-location">Location: {location}</p>
                        <p className="donation-email">Donator: {username}</p>
                        <p className="donation-quantity">Quantity: {quantity}</p>
                        <p className="donation-create">Posted on: {(moment(created_at,'YYYY-MM-DD').format()).split('T')[0]}</p>
                        <p className="donation-quantity">Average User Rating: {avgRating}/5</p>
                        <p className="donation-quantity">Total Ratings: {totalRatings}</p>
                
                    </div>
               
                </div>
            </div>
            
        </div>
        
      </div>

    </div>
  );
}
