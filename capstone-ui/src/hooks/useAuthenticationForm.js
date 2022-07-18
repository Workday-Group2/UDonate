import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"

export const useAuthenticationForm = ({user}) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        username: "",
        firstname: "",
        lastname: "",
        password: "",
        passwordConfirm: "",
    })

    useEffect(() => {
      // if user is already logged in,
      // redirect them to the home page
      if (user?.email) {
        navigate("/")
      }
    }, [user, navigate])

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
    
    return {
        form,
        errors,
        setErrors,
        handleOnInputChange
    }
}