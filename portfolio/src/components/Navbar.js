/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className = "container">

      
        <a className="navbar-brand mb-0 h1" href="#">Varun Chandan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav justify-content-end ml-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Entertainment</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
      
    
  )
}

export default Navbar

