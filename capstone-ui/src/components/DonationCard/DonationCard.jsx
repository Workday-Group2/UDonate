import * as React from "react";
import { Link } from "react-router-dom";
import * as moment from 'moment'
import DonationDetailPage from "../DonationDetailPage/DonationDetailPage";
import "./DonationCard.css";
import { AiFillStar } from 'react-icons/ai';

export default function DonationCard({
  quantity,
  name,
  imageUrl,
  donation_desc,
  location,
  username,
  created_at,
  totalRatings,
  avgRating,
  expiration_date,
  donater_profilePic
}) {
  return (
    <div className="DonationCard">
       <div className="title">
          <h1 className="donation-name"> {name}</h1>
        </div> 
      <div className="container" id="card-id">
         
        <div className="box-pic">
          <div className="pic-donation">   
              <img className="donation-image" src={imageUrl} alt="" />
          </div>
        </div>
        
        <div className="cold-md-6">
            <div className="product-detail-content">
                <div className="info-card">
                    
                    <div className="_p-features">
                    <img className="donation-card-profile" src={donater_profilePic}/>
                        <p className="donation-username-card"><strong>@{username}</strong></p>
                        <p className="donation-expiration"><strong>Expiration Date: </strong>{(moment(expiration_date,'YYYY-MM-DD').format()).split('T')[0]}</p>
                        <p className="donation-location"><strong>Location: </strong> {location}</p>
                        <p className="donation-description"><strong>Description: </strong> {donation_desc} </p>
                        <p className="donation-quantity"><strong>Quantity: </strong> {quantity}</p>
                        <p className="donation-create"><strong>Posted on: </strong> {(moment(created_at,'YYYY-MM-DD').format()).split('T')[0]}</p>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <p className="donation-rating"><strong>Donator Average Rating: </strong>{avgRating}/5</p>
                        <p className="donation-totalRating"><strong>Total Ratings: </strong>{totalRatings}</p>
                    </div>
               
                </div>
            </div>
            
        </div>
        
      </div>

    </div>
  );
}
