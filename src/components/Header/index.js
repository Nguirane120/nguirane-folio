import Aos from 'aos'
import React, { useEffect } from 'react'
import Typed from 'react-typed'
import './index.css'

const Header = () => {
  useEffect(() =>{
    Aos.init({ duration: 2000})
  })
  return (
    <>
    <div className="bg_baner postion-relative">
      <div className="position-absolute top-50 start-50 translate-middle text-light">
        <h1>
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
    </div>
   
    </>
  )
}

export default Header