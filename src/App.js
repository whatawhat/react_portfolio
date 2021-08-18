//import logo from './logo.svg';
import './App.css';
import About from './components/aboutMe'
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Header from './components/header';
import Footer from './components/footer';
import Resume from './components/resume';
import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div style={{ background: `#D7CDCC`, height:"100hv" , position: 'absolute', width: "100%"}}>
    <Router >
        <div className="flex-column justify-flex-start min-100-vh" >
          <Header />
          <div className="container">
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </div>
          
        </div>
        <Footer />
      </Router>
      </div>
  )
}

export default App;



