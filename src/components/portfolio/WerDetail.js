import React from 'react'
import { Link } from 'react-router-dom'
import './wer.css'
const WerDetail = () => {
  return (
      <>
    
    <div className="header position-relative">
        <h1 className="position-absolute top-50 start-50 translate-middle  text-light">Wer/Sante</h1>
      </div>
   
    <div className="container py-5">
        <div className="row">
        <div className="col-md-8">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/wer-image/w-p1.png" class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/wer-image/w-p2.png" class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/wer-image/w-p3.png" class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/wer-image/w-p4.png" class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/wer-image/w-p5.png" class="d-block w-100 img-fluid" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
            <div className="col-md-4">
                <div className="card">
                    <h1 className="card-title  m-2">Wer/sante</h1>
                    <div className="card-body">Wer est un projet sanitaire qui prone la modernisation de la consultation.
                    </div>
                    <div className="card-footer">                       
                     <a href="https://wer-project-fb2bd.web.app/" target='_blank'>voici le lien du projet</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WerDetail