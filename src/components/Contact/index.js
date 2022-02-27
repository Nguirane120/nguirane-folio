import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import './contact.css'

const Contact = () => {

    const userInfo = {
        user_name:'',
        user_email:'',
        user_subject:'',
        message:''
    }
const [data, setData] = useState(userInfo)
   const [done, setDone] =  useState(false)

    useEffect(() =>{ Aos.init({ duration: 2000})})
    const formRef = useRef()
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_1fl44pf', 'template_7zumnmg', formRef.current, "tZZ32mefNCgZWf7TN")
      .then((result) => {
          setDone(true)
          setData('')
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <>
            <div className="contact container py-5" data-aos="flip-down">
                <div className="row bg-light">
                    <div className="col-md-6 py-5 p-5">
                        <h1 className='contact-title'>Send message to me</h1>
                        <form onSubmit={handleSubmit} ref={ formRef}>
                            <div className="mb-3 pt-3">
                                <input type="text" className="form-control" placeholder="Your Name" name='user_name' />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control"  placeholder="Your Email" name='user_email'/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control"  placeholder="Your subject" name='user_subject'/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" placeholder='message' rows="3" name='message'></textarea>
                            </div>
                            <div className="mb-4 d-grid gap-2 col-6 mx-auto">
                                <button className='btn btn-primary rounded-pill' type='submit'>Send Message</button>
                            </div>
                            {
                                done && <div className="alert alert-success">Email envoyer avec succes</div>
                            }
                        </form>
                        
                    </div>
                    <div className="col-md-6 py-5 p-5">
                        <h1 className='contact-title'>Get in Tech</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit explicabo optio dolorum ad accusantium amet ducimus consequuntur pariatur non.</p>
                        <div className=''>
                            <div className="d-grid gap-3">
                                <div>
                                    <FontAwesomeIcon icon={faLocationDot} className="text-primary" />  Sacre Coeur 3
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faMobilePhone} className="text-primary" />  7730040843

                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} className="text-primary" />  badaranguirane120@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="py-5">
                            <div className="row gx-4">
                                <div className="col">
                                    <div className="p-3 circle text-center">
                                        <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="p-3 circle text-center">
                                       <a href=""> <FontAwesomeIcon icon={faTwitter} /></a>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="p-3 circle text-center">
                                        <a href=""><FontAwesomeIcon icon={faLinkedin} className="text-center" /></a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 circle text-center">
                                        <a href="" className=''><FontAwesomeIcon icon={faInstagram} className="text-center" /></a>       
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact