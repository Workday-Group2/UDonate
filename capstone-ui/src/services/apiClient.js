import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl) {
      this.remoteHostUrl = remoteHostUrl
      this.token = null
      this.tokenName = "token"
    }
  
    setToken(token) {
      this.token = token
      localStorage.setItem(this.tokenName, token)
    }
  
    async request ({endpoint, method = `GET`, data = {}}){
      const url = `${this.remoteHostUrl}/${endpoint}`
     
      const headers = {
          "Content-Type": "application/json",
      }
  
      if (this.token) {
          headers["Authorization"] = `Bearer ${this.token}`
      }
      try{
          const res = await axios({url, method, data, headers})
          return {data: res.data, error: null}
      } 
      catch(error){
          console.error({errorResponse: error.response})
          const message = error?.response?.data?.error?.message
      return {data: null, error: message}
      }
  }
    async fetchDonation() {
      return await this.request({ endpoint: `donation/`, method: `GET` })
    }

    async listAllDonation() {
      return await this.request({ endpoint: `allDonation`, method: `GET` })
    }

    async createDonation(newDonation) {
      return await this.request({ endpoint: `donation`, method: `POST`, data: newDonation })
    }

    async fetchDonationById(donationId) {
      return await this.request({ endpoint: `donation/${donationId}`, method: `GET` })
    }

    async fetchUserFromToken() {
      return await this.request({ endpoint: `auth/me`, method: `GET` })
    }
    // async fetchActivity() {
    //   return await this.request({ endpoint: `activity`, method: `GET` })
    // }
    async signupUser(credentials) {
      return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
    }
  
    async loginUser(credentials) {
      return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
    }
  
    async logoutUser() {
      this.setToken(null)
      localStorage.setItem(this.tokenName, "")
    }
  }
  
  export default new ApiClient("http://localhost:3001")