import React from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import '../App.css'

function Home() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <div className="bookings">
        <button>Book an appointment</button>
      </div>
    </>
  )
}

export default Home
