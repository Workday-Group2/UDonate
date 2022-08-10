import * as React from "react"
import "./BrowseFeed.css"
import { useState, useEffect,  useMemo } from "react"
import { Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
import DonationDetailPage from "../DonationDetailPage/DonationDetailPage"
import { getFormAutofillValues } from "@mapbox/search-js-web"

export default function BrowseFeed(props) {
    const [donation, setDonation] = useState([])
    const [error, setError] = useState() 
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedCity, setSelectedCity] = useState();
    async function getDonation(){
      const {data, error} = await apiClient.listAllDonation()
      if(error) setError(error)
      if(data){
        setDonation(data.donations)
        console.log(999,data)
      }
      }
      useEffect(() => {
        getDonation()
      }, []);

    function handleCategoryChange(event) {
      setSelectedCategory(event.target.value);
    }
    function selectCity(event){
      setSelectedCity(event.target.value)
      console.log(956,event.target.value)
    }

    function getFilteredCity() {
      if(!selectedCity) {
        return donation;
      }
      return donation.filter((item) => item.city === selectedCity);
      
    }
    function filterCity(){
      

    
    }

    let filteredList = useMemo(getFilteredList,[selectedCategory,donation]);
    
    function getFilteredList() {
      if(!selectedCategory || !selectCity) {
        return donation;
      }
      return donation.filter((item) => item.category === selectedCategory);
      
    }

    let filtedList = useMemo(getFilteredList,[selectedCategory,donation]);

    

    


    return (
        <div className="browse-feed">
           <h1>Browse Donations</h1>
           <div className="filter-container">
              {/* <div className="filter-title">Filter by Category:</div> */}
              <div>
                <select
                  className="filter-list"
                  name="category-list"
                  id="category-list"
                  onChange={handleCategoryChange}
                  >
                    <option value="" >Filter by category </option>
                    <option value="Fruits and Vegetables">Fruits and Vegetables </option>
                    <option value="Dairy and Eggs">Dairy and Eggs</option>
                    <option value="Protein">Protein</option>
                    <option value="Pantry Essentials">Pantry Essentials</option>
                    <option value="Bread">Bread</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Beverages">Beverages</option>
                </select>
              </div>
              <div>
                <select
                  name="category-list"
                  id="category-list"
                  onChange={selectCity}
                  >
                    <option value="">Select City</option>
                    {donation.map((item) => {return(<option value={item.city}>{item.city}</option>)})}
                    
                    
                </select>
              </div>
           </div>
            <div className="donation-items">
                {filtedList.map((item) => {return(
                    <Link to={`id/`+item.id}>    
                        <DonationDetailPage key={item.item} quantity={item.quantity} name={item.name} 
                        imageUrl={item.imageUrl} donation_desc={item.donation_desc} location={item.location}
                        category={item.category} donaterUsername={item.donaterUsername} 
                        expiration_date={item.expiration_date} donater_profilePic={item.donater_profilePic}
                         />
                    </Link>
                )})}
            </div>
        </div>
    )
}