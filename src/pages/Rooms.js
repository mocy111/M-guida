import React from 'react'
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import RoomsContainer from "../Components/RoomsContainer"
import {Link } from "react-router-dom"

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero" >
                <Banner title="Our rooms">
                    <Link to="/" className="btn-primary" >
                         return Home
                    </Link>
                </Banner>
            </Hero>
             <RoomsContainer/>
        </>
    )
}

export default Rooms
