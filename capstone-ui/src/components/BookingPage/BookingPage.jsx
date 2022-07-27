import * as React from "react"
import Modal from "react-modal"
import "./BookingPage.css"
import { useParams, Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
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
export default function BookingPage(props) {
    const {donationId} = useParams()
    const [donation, setDonation] = React.useState({})
    const [booking, setBooking] = React.useState(null)
    const [error, setError] = React.useState(false)
    const handleOnSubmitBooking = async () => {
        const request = async () => {
            const { data, error } = await apiClient.newBooking(donationId)
            if(error) {
                setError(error)
            }
            if(data){
                setBooking(data)
            } else {
                console.log("error",error)
            }
        }
        request()
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
            <div className="content">
                <h1>Hi, {props.user.first_name}!</h1>
                {booking ? (
                    <div className="completed">
                        <h1>Confirmed!</h1>
                        <div className="icon">
                            <BsCheckCircle  size={40}/>
                        </div>
                        
                    </div>
                ) : (
                    <div className="content">
                        <h4>Please confirm the booking details.</h4>
                        <div className= "booking-form">
                            <div>
                                <p>Donation Item: {props.donation.name}</p>
                            </div>
                            <div>
                                <p>Location: {props.donation.location}</p>
                            </div>
                        </div>
                        <div className="booking-page">
                            <button className = "bookingButton"  onClick={handleOnSubmitBooking}>
                                Confirm
                            </button>
                        </div>
                    </div>
                    )}
            </div>
        </Modal>
        
        
    )
}