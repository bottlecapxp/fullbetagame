import React from 'react'
import { useHistory } from "react-router-dom"
import './components.css'
import Triangle from './../images/triangle.png'

const Footer = (props) => {
  let history = useHistory();

  return(
    <div className='footer_container'> 
    <div className='footer_content_holder'>
    <img className='triangle_arrow' src={Triangle} alt='triangle' />
    <p>Please Enjoy Responsibly</p>
    </div>
     
      <button id='footer_btn' onClick={() => {history.push('/terms')}}>terms and conditions</button>
    </div>
   )

 }

export default Footer