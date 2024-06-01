import * as React from "react"
import './section2.css';
import { FaAngleRight } from "react-icons/fa";
import lungs from './lungs.png';
import file from './file.png';
import brain from './brain.png';
import teeth from './teeth.png';

const Section2 = () => {
  return (
    <div id="sec2con">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-9 p-lg-5 mx-auto my-5">
      <h1 className="fw-bold py-5">Our Services</h1>
      <div className="" id="sec2p1">
        <p className="">We provide the most full medical services, so every person could <br/>heave the oppurtunity to receive qualitative medical help.</p>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 py-5 justify-content-center text-center" id="divsec2">
    <div className="col">
        <div className="rounded-4 shadow-lg" id="dentaldiv">
          <div className="card-body">
            <img id="dental" src={teeth} alt="tooth img" className="img-fluid" />
            <div className="py-5 text-start" id="dentext"><p className="fw-bold py-1">Dental Care</p>
          </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="mb-4 rounded-4 shadow-lg border-primary">
          <div className="card-header pt-3 text-bg-primary border-primary shadow-lg" id="lungsdiv">
            <img id="lungs" src={lungs} alt=""  className="img-fluid"/>
            <div className="pt-5 text-start" id="dentext"><p className="fw-bold py-3">Pulmonary</p>
            <div className="d-flex justify-content-between py-2" id="s2divden"><p id="s2p2">LEARN MORE</p><i id="s2i1"><FaAngleRight /></i></div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
        <div className="mb-4 rounded-4 shadow-lg">
          <div className="card-body" id="neurodiv">
            <img id="neuro" src={brain} alt="" className="img-fluid" />
            <div className="py-4 text-start" id="neurotext"><p className="fw-bold py-3">Neurological</p>
          </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="mb-4 rounded-4 shadow-lg">
          <div className="card-body" id="prediadiv">
            <img id="predia" src={file} alt="" className="img-fluid" />
            <div className="py-4 text-start" id="pretext">
            <p className="fw-bold py-3">Prediatrics</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
    </div>
    
  )
}

export default Section2;
