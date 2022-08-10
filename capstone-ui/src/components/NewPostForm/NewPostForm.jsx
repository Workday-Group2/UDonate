import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import "./NewPostForm.css"
import {useNavigate} from 'react-router-dom';
// import Location from "../Location/Location";
import { AddressAutofill } from '@mapbox/search-js-react';
import React from 'react';


export default function NewPostForm({user, addPost}) {
  
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [date,setDate] = useState("")
    const [location,setLocation] = useState("")
    const [desc,setDesc] = useState("")
    const navigate = useNavigate()
    const [form, setForm] = useState({
      name: "",
      category: "",
      imageUrl: "",
      quantity:1,
      expiration_date: "",
      donation_desc: "",
      location: "",
      city: "",
      state: "",
    })
    
    const handleOnInputChange = (event) => {
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
    
    const handleOnSubmit = async (e) => {
      setIsLoading(true)
      
      const { data, error } = await apiClient.createDonation( { name : form.name, 
        category : form.category, image_url: form.imageUrl, quantity : form.quantity,
         expiration_date: date, donation_desc: desc, location: location, city: form.city, state: form.state})
        if (error) {
          setError(error)
        }
        if (data) {
          console.log(565,data)
        addPost(data.user)
        console.log(555,form)
        setForm({
           name: "", 
           category: "",
           imageUrl: "",
           quantity: 1,
           expiration_date: "",   
           donation_desc: "",
           location: "",
           city: "",
           state: "", 
          })
          
          setDate("") 
          setLocation("")
          setDesc("")
          navigate("/browse");
        } else {
          setIsLoading(false)
          setError(error)
          alert("Please fill out all the required fields")
        }
      
    }
    
    const renderForm = () => {
      if (!user?.email) {
        return <AccessForbidden />
      }
      return (
        <div className="newPost">
          <div className="left-donation"> 
          <div className="overlay-donation">
              <h1 className="newform-text">Let's start saving food.</h1>   
          </div>
          <img className="donation-form-pic" src="https://media.istockphoto.com/vectors/happy-woman-holds-food-box-in-hands-food-drive-donation-concept-of-vector-id1221187998?k=20&m=1221187998&s=170667a&w=0&h=SVEsjLS8FdmhNpJmdIUiY8A__shFKg0-nHGbf4aE8EE="/>
          </div>
          <div className="form">
            <div className="form1">
            <div className="input-field" id="title">
                <label className= "title-name" htmlFor="title" >Title: </label>
             
              <div className="title-form">
                <input
                  className="new-form-input"
                  type="text"
                  name="name"
                  placeholder="Title"
                  value={form.name}
                  onChange={handleOnInputChange}
                />
              </div>
              

            </div>
            <div className="input-field">
              <div className="title-form">
                <label className= "title-name"  htmlFor="category">Category: </label>
              </div>
              <select
                className="new-form-input"
                name="category"
                value={form.category}
                onChange={handleOnInputChange}
              >
              <option>Select a Category</option>
              <option value="Fruits and Vegetables">Fruits and vegetables</option>
              <option value="Dairy and Eggs">Dairy and Eggs</option>
              <option value="Protein">Protein</option>
              <option value="Pantry Essentials">Pantry Essentials</option>
              <option value="Bread">Bread</option>
              <option value="Desserts">Desserts</option>
              <option value="Snacks">Snacks</option>
              <option value="Beverages">Beverages</option>
              </select>
            </div>
            
            <div className="input-field">
              <div className="title-form">
                <label className= "title-name"  htmlFor="imageUrl">Image URL: </label>
              </div>
              
              <input
              className="new-form-input"
                type="text"
                name="imageUrl"
                placeholder="The image URL"
                value={form.imageUrl}
                onChange={handleOnInputChange}
              />
            </div>
            <div className="input-field">
              <div className="title-form">
                <label className= "title-name"  htmlFor="quantity">Quantity: </label>
              </div>
              <input
              className="qty"
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleOnInputChange}
                min="0"
              />
            </div>
            <div className="input-field">
              <div className="title-form">
                <label className= "title-name"  htmlFor="expiration">Expiration Date: </label>
              </div>
              
              <input
              className="new-form-input"
                type="date"
                placeholder="MM-DD-YYYY"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="input-field">
              <div className="title-form">
                <label className= "title-name" htmlFor="donation_desc">Description: </label>
              </div>
              <textarea
              className="description-input"
                type="text"
                placeholder="Description"
                value={desc}
                maxlength = "210"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="input-field">
              <div className="title-form">
                <label className= "title-name" htmlFor="location">Public Address: </label>
              </div>
              <form>
              <AddressAutofill accessToken="pk.eyJ1Ijoicm9iYmVkMyIsImEiOiJjbDYxMHZjZDEwd3FpM2VueThkdXhvdjY3In0.9BnfhK_Gv049Gv1ks9i8yA">
              <input
              className="new-form-input"
                type="text"
                autoComplete="address-line1"
                placeholder="Enter an address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              </AddressAutofill>
              <div className="location-info">
                {/* <input
                  className="location-input"
                  name="apartment" placeholder="Apartment number" type="text"
                  autoComplete="address-line2"
                /> */}
              <input
                  name="city" placeholder="City" type="text"
                  autoComplete="address-level2" className="location-input"
                  readOnly = {true}
              />
              <input
                  name="state" placeholder="State" type="text"
                  autoComplete="address-level1" className="location-input"
                  readOnly = {true}
              />
              <input
                  name="country" placeholder="Country" type="text"
                  autoComplete="country" className="location-input"
                  readOnly = {true}
              />
              <input
                  name="postcode" placeholder="Postcode" type="text"
                  autoComplete="postal-code" className="location-input"
                  readOnly = {true}
              />
            </div>
              </form>
            </div>
            
            <div>
              {error ?  "Please fill out all the required fields" : null}
            </div>
            <button className="post-button" disabled={isLoading} onClick={handleOnSubmit}>
              {isLoading ? "Loading..." : "Submit"}
            </button>
           
            </div>
            
          </div>
          
          
        </div>
        
      )
    }

    return (
        <div className="NewPostForm">
        <div className="card">
            <h2 className="title-donation" >Post a Donation</h2>

            {Boolean(error) && <span className="error">{error}</span>}

            {renderForm()}
            
        </div>
        
    </div>
    )
}