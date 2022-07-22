import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import "./NewPostForm.css"
import {useNavigate} from 'react-router-dom';


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
      // e.preventDefault()
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
            <div className="input-field">
                <label className= "title-name" htmlFor="title">Title: </label>
             
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
              <input
              className="form-input"
                type="text"
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleOnInputChange}
              />
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
              className="form-input"
                type="number"
                name="quantity"
                placeholder="quantity"
                value={form.quantity}
                onChange={handleOnInputChange}
                step="1"
              />
            </div>
            <div className="input-field">
              <div className="title-form">
                <label className= "title-name"  htmlFor="expiration">Expiration Date: </label>
              </div>
              
              <input
              className="form-input"
                type="date"
                // name="expiration date"
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
                // name="expiration date"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="input-field">
              <div className="title-form">
                <label className= "title-name" htmlFor="location">Location: </label>
              </div>
              
              <input
              className="form-input"
                type="text"
                // name="expiration date"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
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