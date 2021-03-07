import "bootstrap/dist/css/bootstrap.min.css";
// import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';
import Navbar from "./components/navbar";
import Header from "./components/header";
import AboutMe from "./components/aboutme";
import Experience from "./components/experience";
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';


function app() {
  return (
    <>
    <router>
    <Navbar />
    <Header />
    <AboutMe />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </router>
    </>
  );
}

export default app;