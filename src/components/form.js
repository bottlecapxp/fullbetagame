import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import emailJS from 'emailjs-com';
import './components.css'

const Form = (props) => {
  let history = useHistory();

const sumbitInfo = (e) =>{
  e.preventDefault()

  fetch("https://bottlecapdev.pythonanywhere.com/shipping-data", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
    'fullname': `${e.target.firstName.value} ${e.target.lastName.value}`,
    'address': `${e.target.addressOne.value} ${e.target.city.value}`,
    'postal_code': `${e.target.postalCode.value}`,
    'province': `${e.target.province.value}`,
    'email': `${e.target.email.value}`,
    'phone': `${e.target.phone.value}`

    })
  }).then((resp) => resp.json())
  .then((respr) =>{
    const status = respr.status
    if(parseInt(status) === 200){
      var templateParams = {
        to_name: `${e.target.firstName.value}`,
        reply_to: `${e.target.email.value}`,
        message: `Thank you for choosing Sapporo Brewery. Your order is being process. It can take up to 6 weeks to receive your prize.`
    
      }
      // Send Email
      emailJS.send('service_thetfwl', 'template_i9rdhf9', templateParams, 'user_AQ88jMvNSoWJpgS9wommO')
      .then((result) =>{ 
        console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })

      setTimeout(()=>{
        history.push('/ThanksForEntry')
      }, 1500)
  
    }
  })



}


  return(
    <form className='form_container' onSubmit={sumbitInfo}> 
      <input type="text" name="firstName" id="firstName" placeholder="FIRST NAME" />
      <input type="text" name="lastName" id="lastName" placeholder="LAST NAME" />
      <input type="email" name="email" id="email" placeholder="EMAIL" />
      <input type="tel" name="phone" id="phone" placeholder="PHONE"/>
      <input type="text" name="addressOne" id="addressOne" placeholder="ADDRESS" />
      <input type="text" name="city" id="city" placeholder="CITY"/>
      <input type="text" name="province" id="province" placeholder="PROVINCE"/>
      <input type="text" name="postalCode" id="postalCode" placeholder="POSTAL CODE"/>
      {/* <p>voluptate ut reprehendrit.</p> */}
      <button type='submit' id="submit">SUBMIT</button>
    </form>
   )

 }

export default Form