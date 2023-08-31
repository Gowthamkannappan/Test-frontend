import React from 'react'
import Navbar from './navbar'
export default function About() {
  const aboutStyle ={
    width:'100vw',
    height: "100vh",
    backgroundColor:'#3ccacc'
  }
  return (
    <div style={aboutStyle}>
      <Navbar/>
      <section>
      <h1>  Swamy Business Ventures</h1> 
      </section>
    </div>
  )
}
