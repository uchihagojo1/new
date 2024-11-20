import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="d-none d-lg-block position-relative dn--hm1--header dn--header-sticky-ebl dn--hm1--header-vone">
      <nav className="dn--hm1--nav navbar navbar-expand-lg container px-xxl-0 position-absolute translate-middle start-50">
        <div className="ps-5 pe-5 dn--hm1--nav-container mx-auto mt-5 rounded-pill bg-white">
          {/* Logo */}
          <div className="dn--hm1--nav--logo-box logo">
            <a className="dn--hm1--nav--logo--link" href="#">
              <img className="dn--hm1--nav--logo" src="assets/images/Blog-1/sll.png" alt="logo" style={{ marginLeft: '-120px' }}  />
            </a>
          </div>
          {/* Navbar links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {/* Home */}
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              {/* About */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              {/* Contact */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              {/* Donate */}
              <li className="nav-item">
                <Link className="nav-link" to="/donate">Donate</Link>
              </li>
            </ul>
          </div>
          {/* Donate Button */}
          <div className="dn--hm6-button d-none d-xxl-block">
            <Link className="dn--button-hover dn--button-hover-1" to="/donate">
              <span className="dn--button-hover-text">Donate Now</span>
              <span className="dn--button-hover-arrow">
                <svg className="dn--button-hover-svg-arrow" xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 9.8 9.8">
                  <g>
                    <path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                  </g>
                  <g>
                    <path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

