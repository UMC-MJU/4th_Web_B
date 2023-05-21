import React from "react";
import NavBar from '../components/Navbar';
import CategoryBar from "../components/CategoryBar";
import Content from "../components/Content";
import Footer from "../components/Footer";


function Spain () {
    return (
      <div>
        <div className="bar">
          <NavBar />
          <hr></hr>
          <CategoryBar />
        </div>
        <Content title="Madrid" ></Content>
        <div className="footer-bar"> 
          <Footer />
        </div>
      </div>
    )
}


export default Spain;