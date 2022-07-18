import "./Register.css"
import { useRegistrationForm } from "../../hooks/useRegistrationForm"

export default function Register() {
  const {form, errors, handleOnInputChange, handleOnSubmit} = useRegistrationForm()

      
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
           <div className="form-input">
                <label htmlFor="name">Confirm Password</label>
                <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm your password"
                    value={form.confirmPass}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>
            <button className="submit-registration" onClick={handleOnSubmit} >Create Account</button>
        </nav>
    )
}