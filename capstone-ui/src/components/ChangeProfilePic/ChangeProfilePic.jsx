import * as React from "react"
import Modal from "react-modal"
import { useState } from "react" 
import { BsCheckCircle } from "react-icons/bs";
import apiClient from "../../services/apiClient"

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
    const [profilePicUrl, setProfilePicUrl] = useState("")
    const [url, setUrl] = useState("")
    const [error, setError] = useState() 
    const [isLoading, setIsLoading] = useState(false)

    const [isProfile, setIsProfile] = useState(false)
    const [form, setForm] = useState({
        profilePicUrl: "",
    })
    const handleOnUpdate = async () => {
        setIsLoading(true)
    
        const profileUpdate = { profilePicUrl }
    
        const { data, error } = await apiClient.updateProfile({profileUpdate},props.user.email )
        if (data) {
            console.log('data: change proifle', data);
        //   setPost({ ...profilePicUrl, profilePicUrl: data.post.caption })
        //   updatePost({ postId, postUpdate })
        setProfilePicUrl("")
        }
        if (error) {
          setError(error)
        }
    
        // setIsUpdating(false)
    }
   

    const handleOnInputChange = (event) => {
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
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
                      <h1>Edit your picture url</h1>
                    <input
                        className="picUrl"
                        type="text"
                        name="url"
                        value={form.profilePicUrl}
                        onChange={handleOnInputChange}
                        />
                  </div>
                  <button className="pic-button" disabled={isLoading} onClick={handleOnUpdate}>
                    {isLoading ? "Loading..." : "Submit"}
                  </button>
                  {error && (
                      <p className="rating-error"> {error} </p>
                    )}
                </div> 
        </Modal>
    )
}