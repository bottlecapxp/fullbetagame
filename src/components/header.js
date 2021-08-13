import React from 'react'
import Logo from './../images/sapporo-logo.png'
import './components.css'

const Header = (props) => {
  return(
    <div className='header_container'> 
      <img className='header_info' src={Logo} alt='logo'></img>
      <h1> {props.title}</h1>
    </div>
   )

 }

export default Header