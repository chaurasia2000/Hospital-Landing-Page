import * as React from "react";
import "./section3.css";
import doctor from "./doctor.png";
import ambulance from './ambulance.png';
import emergency from './emergency.png';

const Section3 = () => {
  return (
    <div className="container" id="sec3con">
      <div className="row featurette">
        <div className="col-md-6" id="sec3div1">
          <h5 className="py-4 text-start" id="sec3h1">
            Clinic With Innovative
          </h5>
          <p className="lead py-2">
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </p>
          <button className="fw-bold btn btn-primary rounded-5 py-3 px-5" id="btn-1">
            Learn More
          </button>
        </div>
        <div className="col-sm-5 main-container mt-5">
          <div className="" id="sec3divp1">
            <div className="position-absolute top-50 start-50 card-body">
              <div className="img-card" id="sec3divimg1">
                <img src={emergency} alt="" className="img-fluid" id="sec3img1" />
                <div className="py-4 card-text">Emergency Care</div>
              </div>
            </div>
          </div>
          <div className="" id="sec3divp2">
            <div className="col-md">
              <div className="position-absolute top-50 end-50 card-body">
                <div className="img-card" id="sec3divimg2">
                  <img src={ambulance} alt="" className="img-fluid" id="sec3img2" />
                  <div>24 Hours Service</div>
                </div>
              </div>
            </div>
          </div>
          <div className="" id="sec3divp3">
            <div className="col-md">
              <div className="position-absolute bottom-50 end-50 card-body">
                <div className="img-card" id="sec3divimg3">
                  <img
                    src={doctor}
                    alt=""
                    className="img-fluid"
                    id="sec3img3"
                  />
                  <div>Qualified Doctors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
