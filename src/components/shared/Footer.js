import React from "react"
import { Link } from "gatsby"

import { RrssBlock } from "./Header"

import logo_full from "../../assets/img/logofooter.png"

const Footer = ({ children }) => (
  <footer>
    <div className="items_wrapper layout">
      <div className="logo_wrapper">
        <div className="img_wrapper">
          <Link to="/">
            <img src={logo_full} alt="logo" />
          </Link>
        </div>

        <p>©2019 The Beta Way</p>
      </div>
      <div className="rrss_wrapper">
        <p className="title">Follow</p>
        <RrssBlock />
      </div>
      <div className="explore_wrapper">
        <p className="title">Explore</p>
        <div className="links_wrapper">
          <div className="link_wrapper">
            <Link to="/">Home</Link>
          </div>
          <div className="link_wrapper">
            <Link to="/about-us">About Us</Link>
          </div>
        
          <div className="link_wrapper">
            <Link to="/press">Press</Link>
          </div>
          <div className="link_wrapper">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="contact_wrapper_footer">
        <p className="title">Contact</p>

        <div className="postal_direction">
          <p>623 Bergen St, Brooklyn, </p>
          <p>NY 11238.</p>
          <p>+1 646-780-9019</p>
        </div>
        <a href="mailto:info@betaway.com">info@betaway.com</a>
      </div>
    </div>
  </footer>
)

export default Footer
