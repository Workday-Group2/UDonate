import * as React from "react"
import "./Bookings.css"
import { useState, useEffect } from "react"
import apiClient from "../../services/apiClient"
import YourBookings from "../YourBookings/YourBookings"

export default function Bookings() {
    const [booking, setBooking] = useState([])
    const [error, setError] = useState() 

    async function getBooking(){
      const {data, err} = await apiClient.listBookingForUser()
      if(err) setError(err)
      if(data){
        setBooking(data.userBooking)
      }

      }
      useEffect(() => {
        getBooking()
      }, []);
    return (
        <div className="your-booking">
            <h1>Your Bookings</h1>
        <div className="your-booking-items">
        {booking.map((item) => {return(
                <YourBookings key={item.id} quantity={item.quantity} name={item.name} 
                imageUrl={item.imageUrl} donation_desc={item.donation_desc} location={item.location}
                category={item.category}
                 />
        )})}
        </div>

    </div>
    )
}