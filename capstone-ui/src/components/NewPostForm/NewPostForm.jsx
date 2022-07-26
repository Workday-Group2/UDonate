import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import "./NewPostForm.css"
import {useNavigate} from 'react-router-dom';
import Location from "../Location/Location";
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
      location: ""
    })
    
    const handleOnInputChange = (event) => {
      console.log("event",event)
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      console.log(700,form)
    }
    
    const handleOnSubmit = async (e) => {
      setIsLoading(true)
      
      const { data, error } = await apiClient.createDonation( { name : form.name, 
        category : form.category, image_url: form.imageUrl, quantity : form.quantity,
         expiration_date: date, donation_desc: desc, location: location})
        if (error) {
          setError(error)
        }
        if (data) {
        addPost(data.user)
        setForm({
           name: "", 
           category: "",
           imageUrl: "",
           quantity: 1,
           expiration_date: "",   
           donation_desc: "",
           location: ""  
          })
          setDate("") 
          setLocation("")
          setDesc("")
        }
        console.log(999,form)
        setIsLoading(false)
        navigate("/browse");
    }
    
    const renderForm = () => {
      if (!user?.email) {
        return <AccessForbidden />
      }
      return (
        <div className="newPost">
          <div className="left-donation"> 
          <div className="overlay-donation">
              <h1>Let's start saving food.</h1>   
          </div>
          </div>
          <div className="form">
            <div className="form1">
            <div className="input-field" id="title">
                <label className= "title-name" htmlFor="title" >Title: </label>
             
              <div className="title-form">
                <input
                  className="form-input"
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
                className="form-input"
                name="category"
                value={form.category}
                onChange={handleOnInputChange}
              >
              <option value=" "></option>
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
              className="form-input"
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
              className="form-input"
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
              <input
              className="form-input"
                type="text"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="input-field">
              <div className="title-form">
                <label className= "title-name" htmlFor="location">Location: </label>
              </div>
              <form>
              <AddressAutofill accessToken="pk.eyJ1Ijoicm9iYmVkMyIsImEiOiJjbDYxMHZjZDEwd3FpM2VueThkdXhvdjY3In0.9BnfhK_Gv049Gv1ks9i8yA">
              <input
              className="form-input"
                type="text"
                autoComplete="address-line1"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              </AddressAutofill>
              <input
                name="apartment" placeholder="Apartment number" type="text"
                autoComplete="address-line2"
            />
            <input
                name="city" placeholder="City" type="text"
                autoComplete="address-level2"
            />
            <input
                name="state" placeholder="State" type="text"
                autoComplete="address-level1"
            />
            <input
                name="country" placeholder="Country" type="text"
                autoComplete="country"
            />
            <input
                name="postcode" placeholder="Postcode" type="text"
                autoComplete="postal-code"
            />
              </form>
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