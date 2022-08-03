import * as React from "react"
import Modal from "react-modal"
import { useState, useEffect } from "react" 
import { BsCheckCircle } from "react-icons/bs";
import apiClient from "../../services/apiClient"
import "./ChangeProfilePic.css"

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
export default function ChangeProfilePic(props) {
   
    const [url, setUrl] = useState("")

    const [error, setError] = useState() 
    const [isLoading, setIsLoading] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    
    useEffect(() => {
        
    },[])

    const handleOnUpdate = async () => {
        setIsLoading(true)
        
        const { data, error } = await apiClient.updateProfile(props.email,{profile_pic: url} ) 
        
        if (data) {
        setIsUpdated(true)
        setUrl((url)=>url) 
        }
        if (error) {
          setError(error)
        }
        
    }

    
    const handleOnInputChange = (event) => {
        setUrl(event.target.value )
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
                  <div>

                      {/* <h1>Edit your picture url</h1> */}
                      <h1 className="profile-updated"></h1>
                        
                        {isUpdated ? 
                        <div className="completed">
                        <h1>Profile Picture Updated!</h1>
                        <div className="icon">
                            <BsCheckCircle  size={40}/>
                        </div> 
                        </div>
                    : 
                    <div>
                        <h1>Edit your picture url</h1>
                      <input
                        className="picUrl"
                        type="text"
                        placeholder="The image URL"
                        name="url"
                        value={url}
                        onChange={handleOnInputChange}
                        />
                     <div className="user-button">
                        <button className="pic-button" disabled={isLoading} onClick={handleOnUpdate}>
                                {isLoading ? "Loading..." : "Submit"}
                        </button>
                     </div>
                      
                    </div>}
                     
                      
                      
                    
                  </div>
                </div> 
        </Modal>
    )
}