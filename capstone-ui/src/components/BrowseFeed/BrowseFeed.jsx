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
        setDonation(data.posts)
      }
      console.log(12,setDonation)
      }
      useEffect(() => {
        getDonation()
      }, []);
    return (
        <div className="Browse-Feed">
            <div>
                {donation.map((item) => {return(
                    <Link to={`id/`+item.id}>
                        <DonationCard key={item.name} quantity={item.quantity} name={item.name} calories={item.calories} imageUrl={item.imageUrl} category={item.category} id={item.id}/>
                    </Link>
                )})}
            </div>
        </div>
    )
}