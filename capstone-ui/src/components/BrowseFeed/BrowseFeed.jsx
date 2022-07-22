import * as React from "react"
import "./BrowseFeed.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
import DonationCard from "../DonationCard/DonationCard"
import DonationDetailPage from "../DonationDetailPage/DonationDetailPage"

export default function BrowseFeed(props) {
    const [donation, setDonation] = useState([])
    const [error, setError] = useState() 

    async function getDonation(){
      const {data, err} = await apiClient.listAllDonation()
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
            {/* <div className="search">
                
                <input type="search" placeholder="Search a donation" />
            </div> */}
           <h1>Browse Donations</h1>
           
            <div className="donation-items">
                {donation.map((item) => {return(
                
                    <Link to={`id/`+item.id}>
                         
                        <DonationDetailPage key={item.id} quantity={item.quantity} name={item.name} 
                        imageUrl={item.imageUrl} donation_desc={item.donation_desc} location={item.location}
                        category={item.category}
                         />
                         {console.log(552, item.name, item.donation_desc, item.location)}
                    </Link>
                )})}
            </div>
        </div>
    )
}