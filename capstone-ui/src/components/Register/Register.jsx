import "./Register.css"
import { useRegistrationForm } from "../../hooks/useRegistrationForm"
import { Link } from "react-router-dom"

export default function Register() {
  const {form, errors, handleOnInputChange, handleOnSubmit} = useRegistrationForm()

      
    return (
        <div className="register">
            <div className="left">
                <div className="overlay">
                    <h1>Create an account.</h1>
                    <div className="illustration-wrapper">
                        <img src="https://i.ibb.co/d2N0ZSC/imageedit-4-7027504588.png" alt="register"/>
                    </div>
                </div>
            </div>
           <div className="registerForm">
                <p className="form-title">Register</p>
                <div className="form">
                <div className="form-input">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter a valid email"
                        value={form.email}
                        onChange={handleOnInputChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
           <div className="form-input">
                <label htmlFor="username"></label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleOnInputChange}
                />
                {errors.username && <span className="error">{errors.username}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="name"></label>
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={form.firstname}
                    onChange={handleOnInputChange}
                />
                {errors.firstname && <span className="error">{errors.firstname}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="name"></label>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={form.lastname}
                    onChange={handleOnInputChange}
                />
                {errors.lastname && <span className="error">{errors.lastname}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="password"></label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="name"></label>
                <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    value={form.confirmPass}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>
            <button className="submit-registration" onClick={handleOnSubmit} >Create Account</button>
            <div className="footer-register">
                <p className="footer-register">
                Have an account? Log in <Link to="/login">here</Link>
                </p>
          </div>
                </div>
                
           </div>
           
        </div>
    )
}