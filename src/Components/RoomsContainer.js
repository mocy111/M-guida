import React,{useContext} from 'react'
import RoomsFilter from "./RoomsFilter"
import RoomList from "./RoomList"
import {RoomContext} from '../Context'
import Loading from "./Loading"


const RoomsContainer = () => {
    const {sortedRooms,loading,rooms}= useContext(RoomContext)
  
    if (loading) {
        return <Loading />;
      }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default RoomsContainer
