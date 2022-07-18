import { useState } from "react"
import apiClient from "../services/apiClient"
import {useAuthenticationForm} from "../hooks/useAuthenticationForm"
import { useAuthContext } from "../contexts/auth"

export const useLoginForm = () => {
  const {user, setUser } = useAuthContext()
    const { form, errors, setErrors, handleOnInputChange} = useAuthenticationForm({user})
    const [isLoading, setIsLoading] = useState(false)

    const handleOnSubmit = async (e) => {
    //   e.preventDefault()
      setIsLoading(true)
      setErrors((e) => ({ ...e, input: null }))

      const { data, error } = await apiClient.loginUser( { email : form.email, password: form.password })
      if (data?.user) {
        setUser(data.user)
        apiClient.setToken(data.token)
      }
      if (error) {
        setErrors((e) => ({ ...e, input: error }))
      }
      setIsLoading(false)
    }
      return {
        isLoading,
        form,
        errors,
        isLoading,
        handleOnInputChange,
        handleOnSubmit,
    }
}