import React, {useContext} from 'react'
import {RoomContext} from '../Context'
import Loading from "./Loading"
import Room from "./Room"
import Title from "./Title"
const FeaturedRooms = () => {
    let {loading,featuredRooms:rooms} = useContext(RoomContext)
    
   const roomss = rooms.map(room => {
        return  <Room room={room} key ={room.id}/> 
    })

    return ( 
        <section className="featured-rooms"> 
            <Title title="featured rooms"/> 
            <div className="featured-rooms-center">
                {loading ? <Loading /> : roomss}
            </div>
           
        </section>
    )
}

export default FeaturedRooms
