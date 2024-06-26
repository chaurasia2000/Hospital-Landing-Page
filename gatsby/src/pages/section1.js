import * as React from "react"
import './section.css';


const Section1 = () => {
    return(
        <div className="container" id="containersec1">
        <div className="col-md-12">
      <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h4 className="mt-5 fw-bold" id="hfirst">Welcome to MediCare+ Clinic</h4>
          <h1 className="mb-1 fw-bold text-start" id="h1sec1">Best Specialists</h1>
          <p className=" fw-bold text-start mt-3 g-0" id="psec1">We are on the leading edge of cancer care. Providing the full<br/>continuum of cancer treatments and supportive care services in a<br/> single convenient location.</p>
        <br/><br />
        <div className="d-flex justify-content-around" id="btndiv"><button className="btn btn-primary fw-bold" id="btnsec1">make an Appointment</button>
        <button className="btn fw-bold bg-text-primary" id="btnsec2">Departments</button>
        </div>
        </div>
        <div className="col-auto d-lg-block" id="fsvg">
          <div className="rounded-4" id="sec1divp2"></div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Section1;