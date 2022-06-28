import React from 'react'
import Hero from "../Components/Hero"
import Services from "../Components/Services"
import Banner from "../Components/Banner"
import FeaturedRooms from "../Components/FeaturedRooms"
import {Link } from "react-router-dom"

const Home = () => {
    return (
        <>
           <Hero >
           <Banner title="Luxurious room" subtitle="deluxe room starting" >
           <Link to="/rooms" className="btn-primary" >
                Our rooms
            </Link>
           </Banner>
           </Hero>
           <Services/>
           <FeaturedRooms/>
            
        </>
    )
}

export default Home
