import * as React from "react"
import { Link } from "react-router-dom"
import { useLoginForm } from "../../hooks/useLoginForm"
import "./Login.css"


export default function Login() {
    const { form, errors, isLoading, handleOnInputChange, handleOnSubmit } = useLoginForm()

    return (
        <div className="login">
               <div className="left">
                   <div className="overlay">
                    <h1>Welcome Back.</h1>
                    <div className="illustration-wrapper">
                        <img src="https://i.ibb.co/4ppSWYF/imageedit-1-7522402154.png" alt="Login"/>
                    </div>
                   </div>
                    
               </div>
            {/* <div className="illustration-wrapper">
                <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
            </div> */}
           
            <div className="loginForm" >
            <p className="form-title">Login</p>
            
            <div className="form">
            <div className="input-field">
                    <label htmlFor="email"></label>
                    <div>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            placeholder="user@gmail.com"
                            value={form.email}
                            onChange={handleOnInputChange}
                        />
                        
                    </div>
                    
                    
            </div>
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
                    <div className="booking-error">
                        {errors.email}
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

            
            </div>

            
           <button className="submit-login" onClick={handleOnSubmit} >Login</button>
           <div className="footer-login">
            <p className="footer-login">
              Don't have an account? Sign up <Link to="/register">here</Link>
            </p>
            <p className="forgot-link">
                Forgot your password? reset it <Link to="/recover">here.</Link>
            </p>
          </div>
            </div>
            
            </div>
            

                
        </div>
    )
}