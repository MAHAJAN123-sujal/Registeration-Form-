import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item fs-3 mx-5 " style={{fontFamily:'cursive'}}>
              <Link to="/" className="nav-link ">Home</Link>
            </li>
            <li className="nav-item fs-3 mx-5 " style={{fontFamily:'cursive'}}>
              <Link to="/register" className="nav-link ">Register</Link>
            </li>
            <li className="nav-item fs-3 mx-5" style={{fontFamily:'cursive'}}>
              <Link to="/login" className="nav-link ">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
