import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './app.css';
// import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "../../My_React_Portfolio/src/components/navbar";
import Header from "../../My_React_Portfolio/src/components/header";
import AboutMe from "../../My_React_Portfolio/src/components/aboutme";
import Experience from "../../My_React_Portfolio/src/components/experience";
import Projects from '../../My_React_Portfolio/src/components/projects';
import Contact from '../../My_React_Portfolio/src/components/contact';
import Footer from '../../My_React_Portfolio/src/components/footer';


function App() {
  return (

    
      <div>
        <p>hallo worlds</p>
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      </div>
    

  );
}

export default App;