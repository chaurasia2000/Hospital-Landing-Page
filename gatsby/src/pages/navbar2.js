import * as React from "react"
import './navbar2.css';

const Navbar2 = () => {
    return(
        
            <nav className="navbar navbar-expand-lg mb-3" aria-label="Eleventh navbar example" id="nav2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><div className="d-flex">
    <h3 className="fw-bold" id="head3">Medi</h3><h3 className="fw-bold" id="head4">Care+</h3>
    </div></a>
      </div>
      <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active m-2" id="home1" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2"  id="about1" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2" id="service1" href="#">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2" id="news1" href="#">News</a>
            </li>
          </ul>
        </div>
    </nav>
    )
}

export default Navbar2;