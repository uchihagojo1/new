import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="dn--hm1--footer--area">
      <div className="dn--hm1--footer--container position-relative">
        {/* Subscription Section */}
        <div className="dn--hm1--footer--subContainer--1">
          <div className="dn--hm1--footer--subContainer--1--contentBox">
            <h2 className="dn--hm1--footer--title has_fade_anim" data-fade-from="left">
              Make sure not to overlook our monthly updates.
            </h2>
            <div className="dn--hm1--footer--rightBox">
              <span className="dn--hm1--footer--txt has_fade_anim">
                The latest news, articles and resources, sent to your inbox weekly.
              </span>
              <form className="dn--hm1--footer--sbmit--form" action="#">
                <div className="dn--hm1--footer--input--btnBox">
                  <div className="dn--hm6-button">
                    <button className="dn--button-hover dn--button-hover-2">
                      <span className="dn--button-hover-text">Subscribe</span>
                      <span className="dn--button-hover-arrow">
                        <svg
                          className="dn--button-hover-svg-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          viewBox="0 0 9.8 9.8"
                        >
                          <path d="m.4 9.4 9-9" />
                          <path d="M.4.5h8.9" />
                          <path d="M9.3 9.4V.5" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <label htmlFor="email" className="visually-hidden">Enter your email</label>
                <input
                  id="email"
                  className="dn--hm1--footer--input rounded-pill"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </form>
            </div>
          </div>
        </div>

        {/* Navigation and Social Media */}
        <div className="dn--hm1--footer--subContainer--2 container px-xxl-0">
          <div className="dn--hm1--footer--logoBox">
            <a className="dn--hm1--footer--logoBox--link" href="#">
              <img className="dn--hm1--footer--logo" src="assets/images/Blog-1/sll.png" alt="Logo" />
            </a>
          </div>


          <nav aria-label="Footer Navigation">
  <ul className="dn--hm1--footer--itemBox">
          {["Home", "About", "Contact", "Donate"].map((item, index) => (
      <li className="dn--hm1--footer--item" key={index}>
        <a 
          className="dn--hm1--footer--item-link" 
          href={`/${item.toLowerCase()}.html`} 
          aria-label={`Navigate to ${item} page`}
          title={`Go to the ${item} section`}
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
</nav>


        </div>
  

        {/* Bottom Section */}
        <div className="dn--hm1--footer--subContainer--3 container px-xxl-0">
          <div className="dn--hm1--footer--bottom--single-Item dn--hm1--footer--bottom--single-Item--1">
            <p className="dn--hm1--footer--bottom--single-Item--txt dn--hm1--footer--bottom--single-Item--1--txt">
              © 2024 Droits. — Donate Children
            </p>
          </div>
          <div className="dn--hm1--footer--bottom--single-Item dn--hm1--footer--bottom--single-Item--2">
            <a className="dn--hm1--footer--bottom--single-Item--txt dn--hm1--footer--bottomLink" href="#">
              Terms &amp; Conditions
            </a>
            <a className="dn--hm1--footer--bottom--single-Item--txt dn--hm1--footer--bottomLink" href="#">
              
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="back-to-top-progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
