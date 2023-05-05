import React from "react";
import NavBar from '../components/Navbar';
import CategoryBar from "../components/CategoryBar";
import Content from "../components/Content";
import Footer from "../components/Footer";


function Uk () {
    return (
      <div>
        <div className="bar">
          <NavBar />
          <hr></hr>
          <CategoryBar />
        </div>
        <Content title="London" ></Content>
        <div className="footer-bar"> 
          <Footer />
        </div>
      </div>
    )
}


export default Uk;