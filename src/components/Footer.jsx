import React from 'react'
import footerlogo from '../assets/react.svg'
function Footer() {
  return (
    <div>
        <div className="brandaddress">
            <p>BrandName</p>
            <p>Brand detail 1</p>
        </div>
      <div className="footerlogo">
        <img src={footerlogo} alt="" />
      </div>
    </div>
  )
}

export default Footer
