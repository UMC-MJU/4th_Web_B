import React from "react";
import NavBar from './Navbar';
import CategoryBar from "./CategoryBar";
import Content from "./Content";
import Footer from "./Footer";
import './App.css';

class App extends React.Component {
  render( ) {
    return (
      <div>
        <div className="bar">
          <NavBar />
          <hr></hr>
          <CategoryBar />
        </div>

       
        <Content />
       

        <div className="footer-bar"> 
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
