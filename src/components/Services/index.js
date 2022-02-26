import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'
import { faBriefcase, faListCheck, faSignal } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
const Services = () => {
  useEffect(() =>{ Aos.init({ duration: 2000})})
  return (

      <>
      <div className="bg_service"></div>
      <div class="container py-5">
        <h1 className="text-center pb-5">Services</h1>
        <div class="row g-4">
          <div class="col-md-4" data-aos="fade-right">
            <div class="card bg-light text-dark">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <FontAwesomeIcon className="rounded-circle" icon={faBriefcase} />
                </div>
                <h3 class="card-title mb-3">Web Design</h3>
                <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, repellendus id nostrum eius in?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up">
            <div class="card bg-light text-dark">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <FontAwesomeIcon className="rounded-circle" icon={faListCheck} />

                </div>
                <h3 class="card-title mb-3">Web Devlopment</h3>
                <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, repellendus id nostrum eius in?</p>
                {/* <a href="" class="btn btn-dark">View more</a> */}
              </div>
            </div>
          </div>
          <div class="col-md-4"  data-aos="fade-right">
            <div class="card bg-light text-dark">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <FontAwesomeIcon className="rounded-circle" icon={faSignal} />

                </div>
                <h3 class="card-title mb-3">Mobile Devlopper</h3>
                <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, repellendus id nostrum eius in?</p>
                {/* <a href="" class="btn btn-primary">View more</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    
  )
}

export default Services