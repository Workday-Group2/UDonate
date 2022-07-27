import { usePasswordResetForm } from "../../hooks/usePasswordResetForm"
import { useLocation } from "react-router-dom"
import "./PasswordReset.css"


export default function PasswordReset(){
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get("token")
    console.log({location, searchParams: searchParams.toString(), token})
    const {form, errors, message, isProcessing, handleOnSubmit, handleOnInputChange} = usePasswordResetForm(token)
    return(
        <div className="PasswordReset">
            <div className="card">
                <h2>Reset Password</h2>

                {errors.form && <span className="error">{errors.form}</span>}
                <br/>
                {message ? (
                    <span className="message">{message}</span>
                ) : (
                    <div className="form">
                       
                        <div className="input-field">
                <label htmlFor="password"></label>
                <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>
           <div className="input-field">
                <label htmlFor="name"></label>
                <input
                    className="form-input"
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    value={form.passwordConfirm}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>
           <button className="submit-PasswordReset" disabled={isProcessing} onClick={handleOnSubmit}>
            {isProcessing ? "Loading..." : "Save Password"}
           </button>
         </div>
         
                )}

                
            
            </div>
        </div>
    )
    
        
    
}