import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import Belgium from "./routes/Belgium";
import Czech from "./routes/Czech";
import France from "./routes/France";
import Germany from "./routes/Germany";
import Italy from "./routes/Italy";
import Portugal from "./routes/Portugal";
import Spain from "./routes/Spain";
import Turkey from "./routes/Turkey";
import Uk from "./routes/Uk";
import './App.css';


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/belgium" exact = {true} element={<Belgium />} />
        <Route path = "/czech" exact = {true} element={<Czech />} />
        <Route path = "/france" exact = {true} element={<France />} />
        <Route path = "/germany" exact = {true} element={<Germany />} />
        <Route path = "/italy" exact = {true} element={<Italy />} />
        <Route path = "/portugal" exact = {true} element={<Portugal />} />
        <Route path = "/spain" exact = {true} element={<Spain />} />
        <Route path = "/turkey" exact = {true} element={<Turkey />} />
        <Route path = "/uk" exact = {true} element={<Uk />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
