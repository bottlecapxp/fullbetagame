import React from 'react'
import './components.css'
import WinSVG from '../images/win.svg'

const Win = (props) => {
  return(
    <div className='win_container'> 
      <img src={WinSVG} width="200" alt="win a home music studio" />
    </div>
   )

 }

export default Win