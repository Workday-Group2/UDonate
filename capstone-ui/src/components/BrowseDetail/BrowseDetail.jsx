import * as React from "react"
import DonationDetailPage from "../DonationCard/DonationCard"
import NotFound from "../NotFound/NotFound"
import apiClient from "../../services/apiClient"
import "./BrowseDetail.css"
import { useParams } from "react-router-dom"

export default function BrowseDetail(props) {
    const [donation, setDonation] = React.useState({})
    const [notFound, setNotFound] = React.useState(false)
    const [error, setError] = React.useState(false)
    const {donationId} = useParams()
    async function getDonation(){
        const {data, err} = await apiClient.fetchDonationById(donationId)
        console.log(102,data)
        if(err) setError(err)
        if(data){
          setDonation(data.donation)
        }
        }
  
    React.useEffect(() => {
      getDonation()
    }, []);
    return (
        <div className="Browse-Detail">
            {notFound ? (<NotFound/>) : <DonationDetailPage quantity={donation.quantity} id={donation.id} name={donation.name} imageUrl={donation.imageUrl} category={donation.category} createdAt={donation.createdAt} createdAt={donation.createdAt}/>}
        </div>
        )
    }