import Aos from 'aos'
import React, { useEffect } from 'react'
import './shop.css'

const Shop = () => {
  useEffect(() => { Aos.init({ duration: 2000})})
  return (
      <>
    <div className="shop position-relative">
        <h1 class="text-light position-absolute top-50 start-50 translate-middle">
       Shopping app Detail 
      </h1>
    </div>
    <div className="container" data-aos="zoom-out-up">
        <div className="row py-5">
            <div className="col-md-8">
            <div className="container py-5">
        <div className="row">
        <div className="col-md-8">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/shopping/shop-1.png" class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/shopping/shop-2.png" class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/shopping/shop-3.png" class="d-block w-100 img-fluid" alt="..."/>
    </div>
    {/* <div class="carousel-item">
      <img src="images/shopping/shop-4.png" class="d-block w-100 img-fluid" alt="..."/>
    </div> */}
    {/* <div class="carousel-item">
      <img src="images/wer-image/w-p5.png" class="d-block w-100 img-fluid" alt="..."/>
    </div> */}
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
            
        </div>
    </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <h1 className="card-title p-3">Shopping App</h1>
                    <div className="card-body">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nemo sunt exercitationem harum quos aspernatur.</p>
                        <a href="https://react-redux-shop-app.herokuapp.com/" target="_blank">il est siponible ici</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop