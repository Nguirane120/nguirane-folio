import Aos from 'aos'
import React, { useEffect } from 'react'
import './about.css'

const About = ({ aos }) => {
  useEffect(() =>{
    Aos.init({ duration: 2000})
  })
  return (
    <>
    <div className="bg_about postion-relative">
      <h1 className="position-absolute top-50 start-50 translate-middle text-light">I am a lover of new technoligies</h1>
    </div>
    <div className="about py-5">
        <div className="container">
            <div className="row bg-light" data-aos="zoom-in">
            <div className="col-md-4 pt-5 p-5">
              <img src="images/pp.jpg" className='img-fluid img-thumbnail w-50' alt="" />
                <div className="skills py-3">
                  <h2>Skills</h2>
                <p className='p-0'>HTML 85%</p>
              <div class="progress">
            <div class="progress-bar w-78"  style={{ width: "85%"}}  role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

            <p>CSS 70%</p>
              <div class="progress">
               <div class="progress-bar" style={{ width: "70%"}} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            </div>
            </div>
            <p>Bootstrap 75%</p>
              <div class="progress">
               <div class="progress-bar" style={{ width: "75%"}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
            </div>
            </div>
            <p>ReactJs 80%</p>
              <div class="progress">
               <div class="progress-bar" style={{ width: "80%"}}  role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            </div>
            </div>
            <p>Django 70%</p>
              <div class="progress">
               <div class="progress-bar" style={{ width: "70%"}} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            </div>
            </div>
            <p>Laravel 50%</p>
              <div class="progress">
               <div class="progress-bar" style={{ width: "50%"}} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            </div>
            </div>
            <p>Nodejs 60%</p>
              <div class="progress">
               <div class="progress-bar" style={{ width: "50%"}} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            </div>
            </div>
                </div>
              
            </div>
            <div className="col-md-4 col-sm-8 pt-5  p-5">
              <p><strong>Nom: </strong>Alioune Badara</p>
              <p><strong>Prenom: </strong>Nguirane</p>
              <p><strong>Email: </strong>badaranguirane120@gmail.com</p>
              <p><strong>Telephone: </strong>773040843</p>
            </div>
            <div className="col-md-4 pt-5">
              <h1 className='about'>About me</h1>
              <hr style={{ width: "20%", textAlign:"left", marginLeft: "0", marginTop:"5px", color: 'blue', border: "1px solid #6960EC"}}></hr>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam quae sequi id corporis recusandae a veniam incidunt dolor consequuntur!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam quae sequi id corporis recusandae a veniam incidunt dolor consequuntur!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam quae sequi id corporis recusandae a veniam incidunt dolor consequuntur!</p>
            
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About