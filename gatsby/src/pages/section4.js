import * as React from "react"
import './section4.css';

const Section4 = () => {
  return (
    <div id="sec4container" className="px-1 pt-5">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-12 p-lg-5 mx-auto my-5">
      <h5 className="display-3" id="sec4h5">We Have The Best Specialist</h5>
        <p className="mt-5" id="sec4p1">We have a wide experience in experience design and strategy,<br/> with locally-rooted knowledge.</p>
    </div>
    <div  className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 text-center" id="sec4con2">
    <div className="col">
        <div className="mb-4 shadow-lg outer rounded-4" id="s4div1">
          <div className="card" id="sec4card1"></div>
            <div className="py-4 text-center" id=""><p className="fw-bold bold">Dr. Awaatif Al</p>
            <p className="fw-bold">Dental Care</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="mb-4 rounded-4 outer shadow-lg">
          <div className="card" id="s4div2"></div>
          <div className="py-4 text-center" id=""><p className="fw-bold bold">Dr. Filipa Gaspar</p>
          <p className="fw-bold">Cardiology</p>
          </div>
        </div>
        </div>
      <div className="col">
        <div className="mb-4 rounded-4 outer shadow-lg">
          <div className="card" id="s4div3"></div>
            <div className="py-4 text-center" id=""><p className="fw-bold bold">Dr. Sukhmeet Gorae</p>
            <p className="fw-bold">Neurological</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="mb-4 rounded-4 outer shadow-lg">
          <div className="card" id="s4div4"></div>
            <div className="py-4 text-center" id="">
            <p className="fw-bold bold">Dr. Siri Jakobsson</p>
            <p className="fw-bold">Prediatrics</p>
            </div>
        </div>
      </div>
    </div>
  </div>
    </div>

  )
}

export default Section4;