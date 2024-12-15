import React, { useState, useEffect } from 'react';
import './Land.css';
// Image imports
import logo from './images/logo.png';
import aboutimage from './images/about.png';
import fimage1 from './images/1.svg';
import fimage2 from './images/2.svg';
import fimage3 from './images/3.svg';
import fimage4 from './images/4.svg';

// Navbar Component
function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href='#main' className='logo'>
        <img src={logo} alt='Logo' />
      </a>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><a href='#main'>Home</a></li>
        <li><a href='#features'>Features</a></li>
        <li><a href='#offer'>Offer</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
  );
}

// Header Component
function Header() {
  return (
    <div id='main'>
      <div className='header-content'>
        <h2>STEP UP YOUR</h2>
        <h1><span>FITNESS</span> WITH US</h1>
        <p className='details'>BUILD YOUR BODY AND FITNESS WITH PROFESSIONAL TOUCH</p>
        <div className='header-btns'>
          <a href='/bmi' className='header-btn' >GET STARTED</a>
        </div>
      </div>
    </div>
  );
}

// FeatureBox Component
function FeatureBox({ image, title }) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={image} alt={title} />
      </div>
      <div className='a-b-text'>
        <h2>{title}</h2>
        <p>Muscular hypertrophy describes an increase in muscle mass. People can achieve muscle hypertrophy</p>
      </div>
    </div>
  );
}

// Feature Component
function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
        <FeatureBox image={fimage1} title="Weightlifting" />
        <FeatureBox image={fimage2} title="Specific Muscle" />
        <FeatureBox image={fimage3} title="Flex Your Muscle" />
        <FeatureBox image={fimage4} title="Cardio Exercise" />
      </div>
    </div>
  );
}

// Offer Component
function Offer() {
  return (
    <div id='offer'>
      <div className='pr-heading'>
        <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
        <p className='details'>Don't miss this exclusive offer!</p>
        <div className='pr-btns'>
          <a href='/wrkout' className='pr-btn' >Take The Leap</a>
        </div>
      </div>
    </div>
  );
}

// About Component
function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt='About Us' />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p> we’re dedicated to helping you achieve your fitness goals in a motivating and supportive environment. With expert trainers, state-of-the-art equipment, and personalized plans, we make fitness a lifestyle. Join our community and start your journey to a healthier, stronger you.</p>
        <div className='pr-btnn'>
          <a href='/tra' className='pr-btn' >Read More</a>
        </div>
      </div>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input type='text' placeholder='Full Name' required />
        <input type='email' placeholder='Type your e-mail' required />
        <textarea placeholder='Write Here....' name='message'></textarea>
        <input type='submit' value='Send' />
      </form>
    </div>
  );
}

// Main App Component
function Land() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}

export default Land;
