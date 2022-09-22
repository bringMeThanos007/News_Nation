import React from 'react';
import {Link} from "react-router-dom";


export default function NavBar() {
  return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about_business">business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about_entertainment">entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about_science">science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about_health">health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about_sports">sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about_technology">technology</Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="./about.js">about</a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

