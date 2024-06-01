import * as React from "react"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar"
import Section1 from "./section1"
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Practice from "./practice";
import Section5 from "./section5";
import Navbar2 from "./navbar2";
import Footer from "./footer";


const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Practice/>
      <Section5/>
      <Navbar2/>
      <Footer/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
