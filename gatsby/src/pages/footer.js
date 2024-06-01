import * as React from "react"
import './footer.css';
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return(
  <footer className="py-5 px-5">
    <ul className="nav col-md-6 justify-content-start list-unstyled d-flex mb-5 px-5">
      <li className="ms-3 icon"><FaFacebookF /></li>
      <li className="ms-3 icon"><FaGoogle /></li>
      <li className="ms-3 icon"><FaTwitter/></li>
    </ul>
    <p className="px-5" id="footerpara">©2023 - 011BQ</p>
  </footer>
    )
}

export default Footer;