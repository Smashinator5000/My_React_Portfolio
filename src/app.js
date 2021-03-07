import "bootstrap/dist/css/bootstrap.min.css";
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
    
    <Navbar />
    <Header />
    <AboutMe />
    <Experience />
    <Projects />
    <Contact />
    <Footer />

    </>
  );
}

export default app;