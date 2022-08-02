import * as React from "react"
import "./Profile.css"
import { FaUserCircle, FaKey } from "react-icons/fa";
import { useState } from "react"
import { Link } from "react-router-dom"
import { FiSettings } from "react-icons/fi";
import ChangeProfilePic from "../ChangeProfilePic/ChangeProfilePic"
import { AiOutlineEdit, AiFillStar } from "react-icons/ai"
import { FcRating } from "react-icons/fc";
const defaultAvatar =
  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
  
const avatarUrl = defaultAvatar
export default function Profile(props) {
    const [isProfile, setIsProfile] = useState(false) 
    const handleProfilePic = () => {
        setIsProfile(true)
    }


    return (
        <div className="Profile">
            <ChangeProfilePic  isOpen={isProfile} toggleModal={() => setIsProfile(false)} 
            email={props.user.email}/>
            <div className="container">
                <h1 className="title">Account Details</h1>
            </div>
            <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                <div className="profile-tab-nav border-right">
                    <div className="p-4">
                        <div className="img-circle text-center mb-3">
                            <img src={props.user.profile_pic}/>
                        </div>
                        <button className="pic-Button" onClick={handleProfilePic} >Change profile picture <AiOutlineEdit/> </button>
                        <h4 className="text-center">{props.user.first_name}</h4>
                    </div>
                    <div className="acc-title" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i className="fa fa-home text-center mr-1"></i> 
							Account <FaUserCircle/>
						</a>
                        <a className="nav-link" id="manage-tab" data-toggle="pill" href="#manage" role="tab" aria-controls="manage" aria-selected="false">
							<i className="fa fa-key text-center mr-1"></i> 
						    Manage <FiSettings/>
						</a>
                        <a className="nav-link" id="ratings-tab" data-toggle="pill" href="#ratings" role="tab" aria-controls="ratings" aria-selected="false">
							<i className="fa fa-key text-center mr-1"></i> 
						    Ratings <AiFillStar/>
						</a>
                       
                    </div>
                </div>
                <div className="tab-content">
                    <div className="account-details" id="account" role="tabpanel" aria-labelledby="account-tab">
                        <h3 className="mb-4">Account Details  </h3>
						<div className="row">
                            <div className="col-md-6">
								<div className="form-group">
                                    <label className="label">First Name: </label>
                                    <span className="form-control">{props.user.first_name}</span> 
                                </div>
							</div>
                            <div className="col-md-6">
								<div className="form-group">
                                    <label className="label">Last Name: </label>
                                    <span className="form-control">{props.user.last_name}</span> 
                                </div>
							</div>
                            <div className="col-md-6">
								<div className="form-group">
                                    <label className="label">Username: </label>
                                    <span className="form-control">{props.user.username}</span> 
                                </div>
							</div>
                            <div className="col-md-6">
								<div className="form-group">
								  	<label className="label">Email: </label>
                                    <span className="form-control"  >{props.user.email}</span> 
								</div>
							</div>
                
                        </div>
                    </div>
                    
                    <div className="manage-tab" id="manage" role="tabpanel" aria-labelledby="manage-tab">
                        <h3 className="mb-4">Manage</h3>
                        <div className="row">
							<div className="col-md-6">
								<div className="form-group">
                                    <Link to="/donations">
                                        <button className = "button-manage" buttonType="primary">Your Donations</button>
                                    </Link>
								</div>
                                <div className="form-group">
                                    <Link to="/bookings">
                                        <button  className = "button-manage" buttonType="primary">Your Bookings</button>
                                    </Link>
								</div>
							</div>
						</div>
                        
                    </div>

                    <div className="ratings-tab" id="ratings" role="tabpanel" aria-labelledby="ratings-tab">
                        <h3 className="mb-4">Your ratings</h3>
                        <div className="row">
							<div className="col-md-6">
								<div className="form-group">
                                <div className="form-control"  >Average Rating: {props.user.avgRating}/5</div> 
                                <div className="form-control"  >Total Number of Ratings: {props.user.totalRating}</div> 
								</div>
                                
							</div>
						</div>
                        
                    </div>
                    
                    <div className="button-press">
                        <Link to="/browse">
                            <button className="acc-btn btn-primary">Done</button>
                        </Link>
					</div>
                </div>
                
            </div>

        </div>
    )
}