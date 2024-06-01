import * as React from "react"
import './navbar.css';

const Navbar = () => {
    return(
            <div className="" id="navcon">
            <nav className="navbar navbar-expand">
  <div className="container">
    <a className="navbar-brand" href="#"><div className="d-flex">
    <h2 id="head1"><b>Medi</b></h2><h2 id="head2"><b>Care+</b></h2>
    </div></a>
  </div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active m-2 fw-bold" id="home" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" id="about" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link m-2" id="service" href="#">
            Service
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" id="news" href="#">News</a>
        </li>
      </ul>
    </div>
    <button className="btn btn-primary" id="btnnav" >Contact</button>
</nav>
            </div>
    )
}



export default Navbar;

