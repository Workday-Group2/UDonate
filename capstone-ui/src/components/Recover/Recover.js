import {useState} from "react"
import {Link} from "react-router-dom"
import apiClient from "../../services/apiClient"

import "./Recover.css"

export default function Recover(){
    const [email,setEmail] = useState("")
    const [error,setError] = useState(null)
    const [message,setMessage] = useState(null)
    const [isProcessing, setIsProcessing] = useState(null)

    const handleOnSubmit =async () =>{
        setIsProcessing(true)
        setError(null)

        if(!email){
            setError("Email Required")
            setIsProcessing(false)
            return
        }
        
        const newEmail = {email}
        const {data, error} = await apiClient.recoverAccount(newEmail)
        if(error) setError(error)
        if(data?.message){
            setMessage(data.message)
        }
        setIsProcessing(false)
    }

    return(
        <div className="Recover">
            <div className="card">
                <h2>Account Recovery</h2>

                {error && <span className="error">{error}</span>}
                <br/>
                {message ? (
                    <span className="message">{message}</span>
                ) : (
                    <div className="form">
                        <p>Enter the email address associated with your account</p>
                        <br/>
                        <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                placeholder="Enter a valid email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
           </div>
           <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
            {isProcessing ? "Loading..." : "Recover Account"}
           </button>
         </div>
         
                )}

                
            <div className="footer">
                 <p>Have an account? Login<Link to="/login">here</Link>.</p>
            </div>
            </div>
        </div>
    )
}
