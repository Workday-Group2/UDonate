import * as React from "react"
import "./BrowseFeed.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
import DonationCard from "../DonationCard/DonationCard"

export default function BrowseFeed(props) {
    const [donation, setDonation] = useState([])
    const [error, setError] = useState() 

    async function getDonation(){
      const {data, err} = await apiClient.fetchDonation()
      console.log(29,data)
      if(err) setError(err)
      if(data){
        setDonation(data.donations)
      }
      console.log(12,donation)
      }
      useEffect(() => {
        getDonation()
      }, []);
    return (
        <div className="browse-feed">
            <div className="search">
                
                <input type="search" placeholder="Search a donation" />
            </div>
            <div className="donation-items">
                {donation.map((item) => {return(
                    <Link to={`id/`+item.id}>
                        <DonationCard key={item.name} quantity={item.quantity} name={item.name} imageUrl={item.imageUrl} createdAt={donation.createdAt} category={item.category} id={item.id} avgRating={item.avgRating} totalRatings={item.totalRatings}/>
                    </Link>
                )})}
            </div>
        </div>
    )
}