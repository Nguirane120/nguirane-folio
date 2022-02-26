import { faAward, faCalendarDays, faCheck, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CountUp from 'react-countup'
import './index.css'

const Experiences = () => {
  return (
    
        <div className="container-fluid pt-5">
            {/* <h1 className='text-center'></h1> */}
            <div className="row pt-5 bg-experience text-center text-light">
                <div className="col-md-4" data-aos="fade-up-left">
                    <div className="h1 mb-3">
                        <FontAwesomeIcon icon={ faCheck } />
                    </div>
                    <h4>Works completed</h4>
                    <CountUp end={ 5 } className="fs-5" duration={5} />
                    </div>
                <div className="col-md-4" data-aos="flip-down">
                    <div className="h1 mb-3">
                        <FontAwesomeIcon icon={ faCalendarDays} />
                    </div>
                    <h4>Years Of Experiences</h4>
                    
                    <CountUp end={ 3 } className="fs-5" duration={5} />

                </div>
                <div className="col-md-4" data-aos="zoom-in-up">
                    <div className="h1 mb-3">
                        <FontAwesomeIcon icon={ faUserGroup} />
                    </div>
                   <h1>Total Clients</h1>
                   <CountUp end={ 2 } className="fs-5" duration={5} />
                    </div>
            </div>
        </div>
    
  )
}

export default Experiences