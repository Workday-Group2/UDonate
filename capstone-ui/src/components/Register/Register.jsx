import { useState } from "react"
import "./Register.css"

export default function Register({user, setUser}) {
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
      })
    const handleOnInputChange = (event) => {
        if (event.target.name === "password") {
          if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
            setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
          } else {
            setErrors((e) => ({ ...e, passwordConfirm: null }))
          }
        }
        if (event.target.name === "passwordConfirm") {
          if (form.password && form.password !== event.target.value) {
            setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
          } else {
            setErrors((e) => ({ ...e, passwordConfirm: null }))
          }
        }
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
      
    return (
        <nav className="register">
           <h1>Register</h1>
           <div className="form-input">
            <label htmlFor="email">Email</label>
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
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    placeholder="your_username"
                    value={form.username}
                    onChange={handleOnInputChange}
                />
                {errors.username && <span className="error">{errors.username}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="name">First Name</label>
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
                <label htmlFor="name">Last Name</label>
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
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={form.password}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>
            {/* <button className="submit-registration" onClick={handleOnSubmit} >Create Account</button> */}
        </nav>
    )
}