import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />
  }
  return (
    <>

      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  )

}
export default withRoomConsumer(RoomsContainer)
