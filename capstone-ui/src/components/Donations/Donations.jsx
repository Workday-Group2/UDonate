import * as React from "react"
import "./Donations.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
import YourDonations from "../YourDonations/YourDonations"

export default function Donations() {
    const [donation, setDonation] = useState([])
    const [error, setError] = useState() 

    async function getDonation(){
      const {data, err} = await apiClient.fetchDonation()
      if(err) setError(err)
      if(data){
        setDonation(data.donations)
      }

      }
      useEffect(() => {
        getDonation()
      }, []);

    return (
        <div className="your-donation">
            <h1>Your Donations</h1>
            <div className="you-donation-items">
            {donation.map((item) => {return(
                    <YourDonations key={item.id} quantity={item.quantity} name={item.name} 
                    imageUrl={item.imageUrl} donation_desc={item.donation_desc} location={item.location}
                    category={item.category}
                     />
            )})}
            </div>

        </div>
    )
}