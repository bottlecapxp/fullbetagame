import React from 'react'
import './components.css'

const Form = (props) => {
  return(
    <div className='form_container'> 
      <input type="text" name="firstName" id="firstName" placeholder="FIRST NAME" />
      <input type="text" name="lastName" id="lastName" placeholder="LAST NAME" />
      <input type="email" name="email" id="email" placeholder="EMAIL" />
      <input type="tel" name="phone" id="phone" placeholder="PHONE"/>
      <input type="text" name="addressOne" id="addressOne" placeholder="ADDRESS 1" />
      <input type="text" name="addressTwo" id="addressTwo" placeholder="ADDRESS 2" />
      <input type="text" name="city" id="city" placeholder="CITY"/>
      <input type="text" name="province" id="province" placeholder="PROVINCE"/>
      <input type="text" name="postalCode" id="postalCode" placeholder="POSTAL CODE"/>
      <p>voluptate ut reprehendrit.</p>
    </div>
   )

 }

export default Form