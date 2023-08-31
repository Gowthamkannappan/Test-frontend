import React from 'react'
import '../App.css'
import Navbar from './navbar'


export default function Contact() {
  const contactStyle ={
    width: '100vw',
    height: '100vh',
    backgroundColor: 'aqua'
  }
  const ContactPage ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10vw'
  }
  return (
    <div style={contactStyle}>
      <Navbar/>
    <div className='ContactPage'>
    <section className="vcard">
<h1>Welcome to Our Exclusive services</h1>
    </section>
    <section className="maps">
      <h4>Contact us at </h4>
      <h1>Swamy Business Ventures</h1><br/>
      <h3>Mobile +91 81485-35364</h3>
    </section>
    </div>
    </div>
    
  )
}
