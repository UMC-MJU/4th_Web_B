import React from "react";
import NavBar from '../components/Navbar';
import CategoryBar from "../components/CategoryBar";
import Content from "../components/Content";
import Footer from "../components/Footer";


function Czech () {
    return (
      <div>
        <div className="bar">
          <NavBar />
          <hr></hr>
          <CategoryBar />
        </div>
        <Content title="Prague" ></Content>
        <div className="footer-bar"> 
          <Footer />
        </div>
      </div>
    )
}


export default Czech;