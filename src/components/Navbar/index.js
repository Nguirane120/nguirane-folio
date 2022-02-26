import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Nguirane@120</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  py-3" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 fs-5 mb-lg-0 text-center">
        <li className="nav-item">
          {/* <a className="nav-link text-light" href='/'>Home</a> */}
          <Link className="nav-link text-light" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link text-light" href="/about">About</a> */}
          <Link className="nav-link text-light" to="/about">About</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link text-light" href='/services'>Services</a> */}
          <Link className="nav-link text-light" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link text-light" href=''></a> */}
          <Link className="nav-link text-light" to='/work'>Work</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href=''>Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href=''>Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar