import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const Work = () => {
  return (
      <>
      <div className="works position-relative">
          <div className="position-absolute top-50 start-50 translate-middle text-light fs-5">MES SERVICES</div>
      </div>
    <div className="container pt-5">
        <h1 className="text-center">Portfolio</h1>
        <div className="row text-center">
            <div className="col-md-4">
             

                <div className="card" style={{ width: '18rem'}}>
                    <img src="images/wer-image/wer.jpg" className='img-fluid' alt="" />
                    <div className="card-body">
                        <h1 className="card-title p-1 text-secondary">Wer</h1>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum laborum dolorem voluptatem officiis aperiam obcaecati provident fuga architecto sunt itaque iusto quidem ipsam, adipisci eius minus explicabo deserunt dolorum quaerat!</p>
                        <Link to="/wer-project" className="btn btn-primary">Voir Plus</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
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
                        <Link to="/e-learning-project" className="btn btn-primary">Voir Plus</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Work