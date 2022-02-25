import React from 'react'
import Typed from 'react-typed'

import './index.css'

const Header = () => {
  return (
    <>
    <div className="header  py-5">
        <h1 className='text-center'>
          Je suis Alioune Badara Nguirane
          </h1>
          <h2 className='text-center text-light'>
          <Typed  
          typeSpeed={40}
          backSpeed={ 60 }
          loop
          strings={["web devlopper", "web designer", "mobile devlopper"]}/>
          </h2>
    </div>
   
    </>
  )
}

export default Header