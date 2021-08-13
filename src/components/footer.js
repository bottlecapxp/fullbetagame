import React from 'react'
import { useHistory } from "react-router-dom"
import './components.css'

const Footer = (props) => {
  let history = useHistory();

  return(
    <div className='footer_container'> 
      <p>Please Enjoy Responsibly</p>
      <button id='footer_btn' onClick={() => {history.push('/terms')}}>terms and conditions</button>
    </div>
   )

 }

export default Footer