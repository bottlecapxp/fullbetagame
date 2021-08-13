import React from 'react'
import './components.css'

const BulletPoint = (props) => {
  return(
    <div className='bullet_container'> 
      <p>{props.point}</p>
    </div>
   )

 }

export default BulletPoint