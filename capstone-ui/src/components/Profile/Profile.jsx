import * as React from "react"
import "./Profile.css"
import { Link } from "react-router-dom"

const defaultAvatar =
  "https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg"

const avatarUrl = defaultAvatar
export default function Profile(props) {
    console.log("user",props)
    return (
        <div className="py-5 my-5">
            <div className="container">
                <h1 className="title">Account Settings</h1>
            </div>
            <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                <div className="profile-tab-nav border-right">
                    <div className="p-4">
                        <div className="img-circle text-center mb-3">
                            <img src="https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg"/>
                        </div>
                        <h4 className="text-center">{props.user.first_name}</h4>
                    </div>
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i className="fa fa-home text-center mr-1"></i> 
							Account
						</a>
                        <a className="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
							<i className="fa fa-key text-center mr-1"></i> 
							Password
						</a>
                        <a className="nav-link" id="security-tab" data-toggle="pill" href="#security" role="tab" aria-controls="security" aria-selected="false">
							<i className="fa fa-user text-center mr-1"></i> 
							Security
						</a>
                        <a className="nav-link" id="application-tab" data-toggle="pill" href="#application" role="tab" aria-controls="application" aria-selected="false">
							<i className="fa fa-tv text-center mr-1"></i> 
							Application
						</a>
                       
                    </div>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                        <h3 className="mb-4">Account Settings</h3>
						<div className="row">
                            <div clasclassNames="col-md-6">
								<div className="form-group">
                                    <label>Last Name</label>
								  	<input type="text" className="form-control" value={props.user.last_name}/>
                                </div>
							</div>
                            <div className="col-md-6">
								<div className="form-group">
								  	<label>Email</label>
								  	<input type="text" className="form-control" value={props.user.email}/>
								</div>
							</div>
                            <div className="col-md-6">
								<div className="form-group">
								  	<label>Phone number</label>
								  	<input type="text" className="form-control" value="+91 9876543215"/>
								</div>
							</div>
                           
                            <div className="col-md-12">
								<div className="form-group">
								  	<label>Bio</label>
									<textarea className="form-control" rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero enim error similique quia numquam ullam corporis officia odio repellendus aperiam consequatur laudantium porro voluptatibus, itaque laboriosam veritatis voluptatum distinctio!</textarea>
								</div>
							</div>
                        </div>
                        <div className="button-press">
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
                    </div>
                    <div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                        <h3 className="mb-4">Password Settings</h3>
                        <div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Old password</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
						</div>
                        <div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>New password</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Confirm new password</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
						</div>
                    </div>
                    
                    <div className="button-press">
						<button className="btn btn-primary">Update</button>
						<button className="btn btn-light">Cancel</button>
					</div>
                </div>
                
            </div>
            
        </div>
    )
}