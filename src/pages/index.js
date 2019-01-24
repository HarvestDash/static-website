import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => (
  <React.Fragment>
    <Navbar />
    <Hero />
    <About />
    <Team />
    <Contact />
    <Footer />
  </React.Fragment>
);

export default LandingPage;
