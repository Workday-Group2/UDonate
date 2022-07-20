import * as React from "react"
import "./Home.css"
import Footer from "../Footer/Footer"
import Contact from "../Contact/Contact"

export default function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            {/* <div className="image">
                <img className="hero-img" src="https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg?w=2000"/>
            </div> */}
            <Contact />
            <Footer />
        </div>
    )
}