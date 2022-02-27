import Aos from 'aos'
import React, { useEffect } from 'react'
import { faBriefcase, faListCheck, faSignal , faCalendarDays, faCheck, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountUp from 'react-countup'
import About from '../About'
import Experiences from '../Experiences'
import Header from '../Header'
import Work from '../portfolio'
import Services from '../Services'
import { Link } from 'react-router-dom'
import Contact from '../Contact'
import './accueil.css'
const Accueil = () => {
  useEffect(() =>{
    Aos.init({ duration: 2000})
  })
  return (
    <>
        <Header/>
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
            <p>Ndejs 60%</p>
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
              <h1 className='accueil-title'>About me</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam quae sequi id corporis recusandae a veniam incidunt dolor consequuntur!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam quae sequi id corporis recusandae a veniam incidunt dolor consequuntur!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam quae sequi id corporis recusandae a veniam incidunt dolor consequuntur!</p>
            
            </div>
            </div>
        </div>
    </div>
    <div class="container py-5">
        <h1 className="text-center pt-5">Services</h1>
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
        <div className="container pt-5">
        <h1 className="text-center accueil-title">Portfolio</h1>
        {/* <p  className="text-center">Mes realisations</p> */}
        <div className="row text-center">
            <div className="col-md-4" data-aos="fade-left">
                <div className="card" style={{ width: '18rem'}}>
                    <img src="images/wer-image/wer.jpg" className='img-fluid' alt="" />
                    <div className="card-body">
                        <h1 className="card-title p-1 text-secondary">Wer</h1>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum laborum dolorem voluptatem officiis aperiam obcaecati provident fuga architecto sunt itaque iusto quidem ipsam, adipisci eius minus explicabo deserunt dolorum quaerat!</p>
                        <Link to="/wer-project" className="btn btn-primary">Voir Plus</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
            <div className="card" style={{ width: '18rem'}}>
                    <img src="images/shopping/shop.jpg" className='' alt="Shop" />
                    <div className="card-body">
                        <h1 className="card-title p-1 text-secondary">Shop</h1>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum laborum dolorem voluptatem officiis aperiam obcaecati provident fuga architecto sunt itaque iusto quidem ipsam, adipisci eius minus explicabo deserunt dolorum quaerat!</p>
                        <Link to="/shop-project" className="btn btn-primary">Voir Plus</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="card" style={{ width: '18rem'}}>
                    <img src="images/learn/learn.jpg" className='' alt="" />
                    <div className="card-body">
                        <h1 className="card-title p-1 text-secondary">E-learning</h1>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum laborum dolorem voluptatem officiis aperiam obcaecati provident fuga architecto sunt itaque iusto quidem ipsam, adipisci eius minus explicabo deserunt dolorum quaerat!</p>
                        <Link to="/" className="btn btn-primary">Voir Plus</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Contact/>
    </>
  )
}

export default Accueil