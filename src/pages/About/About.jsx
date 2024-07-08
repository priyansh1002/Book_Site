import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <h3>Welcome to Booky</h3>
            <p className='fs-17'>Our platform is designed to help book enthusiasts find information about their favorite books quickly and efficiently. We leverage the Open Library API, a comprehensive and freely accessible database of books, to provide you with detailed information on a wide range of titles.</p>
            <p className='fs-17'>
            Thank you for visiting our site. We hope you enjoy using it as much as we enjoyed creating it!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About