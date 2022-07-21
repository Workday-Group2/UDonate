import * as React from "react"
import "./Profile.css"
import { FaUserCircle, FaKey } from "react-icons/fa";


const defaultAvatar =
  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
  
const avatarUrl = defaultAvatar
export default function Profile(props) {
    console.log("user",props)
    return (
        <div className="Profile">
            <div className="container">
                <h1 className="title">Account Details</h1>
            </div>
            <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                <div className="profile-tab-nav border-right">
                    <div className="p-4">
                        <div className="img-circle text-center mb-3">
                            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"/>
                        </div>
                        
                        <h4 className="text-center">{props.user.first_name}</h4>
                    </div>
                    <div className="acc-title" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i className="fa fa-home text-center mr-1"></i> 
							Account <FaUserCircle/>
						</a>
                        <a className="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
							<i className="fa fa-key text-center mr-1"></i> 
						    Password <FaKey/>
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
                            {/* <div className="col-md-6">
								<div className="form-group">
								  	<label className="label">Phone number: </label>
								  	<span className="form-control"  >+91 9876543215</span> 
								</div>
							</div> */}
                           
                            {/* <div className="col-md-12">
								<div className="form-group">
								  	<label>Bio</label>
									<div className="form-control" rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero enim error similique quia numquam ullam corporis officia odio repellendus aperiam consequatur laudantium porro voluptatibus, itaque laboriosam veritatis voluptatum distinctio!</div>
								</div>
							</div> */}
                        </div>
                    </div>
                    <div className="password-tab" id="password" role="tabpanel" aria-labelledby="password-tab">
                        <h3 className="mb-4">Password Settings</h3>
                        <div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Old password</label>
                                      <div className="password-resets">
                                        <input type="password" className="form-control"/>
                                      </div>
								</div>
							</div>
						</div>
                        <div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>New password</label>
                                      <div className="password-resets">
                                        <input type="password" className="form-control"/>
                                      </div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Confirm new password</label>
                                      <div className="password-resets">
                                        <input type="password" className="form-control"/>
                                      </div>
								</div>
							</div>
						</div>
                    </div>
                    
                    <div className="button-press">
						<button className="acc-btn btn-primary">Update</button>
					</div>
                </div>
                
            </div>
            
        </div>
    )
}