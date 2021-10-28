import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const spanstyle={
    color:'#bb0c20'
  }

    return (
        <div>
             <section className="sec-1">
    <div className="header-item-link">
      <div className="logo-top"><img src="./images/IITR_logo.jpg" alt=""/></div>
    </div>
    <div className="header-title">
      <div className="header-title-item">
        <h1>Applied Plasmonics & Photonics Lab <span style={spanstyle}>(APP-Lab)</span></h1>
      </div>
      <div className="header-title-item">
        <h2>Department of Physics,
          Indian Institute of Technology Roorkee, India</h2>
      </div>
    </div>

  </section>
  <div className="header-container">
    <NavLink to="/" className="header-items">Home </NavLink>
    <NavLink to="/Research" className="header-items">Research Interests</NavLink>
    <NavLink to="/Publications" className="header-items">Publications</NavLink>
    <NavLink to="/Team" className="header-items">Team</NavLink>
    <NavLink to="/Gallery" className="header-items">Gallery</NavLink>
    <NavLink to="/Contact" className="header-items">Contact</NavLink>
  </div>
        </div>
    )
}
