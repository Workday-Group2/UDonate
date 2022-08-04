import * as React from "react"
import "./RatingsPage.css"
import Modal from "react-modal"
import apiClient from "../../services/apiClient"
import { useState} from "react"
import { Rating } from '@mui/material';
import { BsCheckCircle } from "react-icons/bs";

const modalStyles = {
    content: {
      position: "relative",
      top: 200,
      left: "auto",
      right: "auto",
      bottom: "auto",
      margin: "0 auto",
      border: 0,
      maxWidth: 680,
      maxHeight: 700,
      textAlign: "center",
      paddingTop: "70px",
      paddingBottom: "45px",
      boxShadow: "0px 18px 36px rgba(0,0,0,0.15)",
      borderRadius: "16px",
    },
  }

export default function RatingsPage(props) {
  console.log('props: ', props);
    const [rating, setRating] = useState([])
    const [error, setError] = useState() 
    const [isLoading, setIsLoading] = useState(false)
    const [isRating, setIsRating] = useState(false)
    const [form, setForm] = useState({
        rating: 1,
    })

  const addRating = (newRating) => {
    setRating((oldRating) => [newRating, ...oldRating])
  }

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    setIsLoading(true)
    
    const { data, error } = await apiClient.createRating(props.donation_id, {rating:form.rating})
    
      if (error) {
        setError(error)
      }
      if (data) {
      setIsRating(true)
      addRating(data.donation_id)
      setForm({
         rating:1
        })
        
      } else {
        setIsLoading(false)
        setError('You already rated this user!');

      }
    
  }

    return (
        <Modal
        className="BookingModal"
        isOpen={props.isOpen}
        onRequestClose={props.toggleModal}
        ariaHideApp={false}
        style={modalStyles}
    >
        <button buttonType="ghost" role="button" onClick={() => props.toggleModal()} className="close-button">
            X
        </button>
        {isLoading && isRating ? (
                    <div className="completed">
                        <h1>Thank you for your rating!</h1>
                        <div className="icon">
                            <BsCheckCircle  size={40}/>
                        </div>
                        
                    </div>
                ) : (
                  <div className="content">
                  <div className="input-field">
                    <div className="title-form">
                      <label className= "title-name"  htmlFor="quantity">You are rating: {props.donaterEmail} </label>
                    </div>
                    <Rating
                      className="rating-stars"
                      name="rating"
                      value={form.rating}
                      onChange={handleOnInputChange}
                      precision={0.5}
                    />
      
                  </div>
                  <button className="post-button" disabled={isLoading} onClick={handleOnSubmit}>
                    {isLoading ? "Loading..." : "Submit"}
                  </button>
                  {error && (
                      <p className="rating-error"> {error} </p>
                    )}
              </div>
                    )}
        
                
                
    </Modal>
    )
}