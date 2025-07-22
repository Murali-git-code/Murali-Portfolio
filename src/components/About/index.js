// src/components/About.js
import React, { Component } from 'react';
import { FaPrayingHands } from "react-icons/fa";


import './index.css'
class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 style={{color:"#ffffff",textAlign:"center"}}>About <span style={{color:"#dcebebff"}}>Me</span></h1>
        <div className='flexbox'>
            <div className='about-container'>
                <h1 className='iam'>Hello! I'm Murali</h1>
                <p className='para'>
                    Hello! I'm Murali, a passionate MERN Stack developer with 8 months of focused learning and hands-on practice.
                     I enjoy building clean, responsive, and functional web applications using modern technologies. 
                     I'm always excited to learn, grow, and take on new challenges. Eager to start my professional 
                      journey, I'm looking forward to joining a dynamic team where I can contribute, 
                      learn, and build meaningful products.<br /> 
                      <p className='thank-you'>Thank you for visiting my portfolio!" <FaPrayingHands color='skyblue' size={15} /></p>
                </p>
            </div>
            <div>
                <ul className='list-container'>
                    <li className='page'>
                        <h2 className='iam'>40+</h2>
                        <p className='matter'>Assignment Projects Completed</p>
                    </li>
                    <li className='page'>
                        <h2 className='iam'>Fresher</h2>
                        <p className='matter'>Eager To Start My Carrier</p>
                    </li>
                </ul>
                <ul className='second-list'>
                    <li className='page'>
                        <h2 className='iam'>Nxt Wave </h2>
                        <p className='matter'>With 8 months of consistent learning and hands-on practice</p>
                    </li>
                    <li className='page'>
                        <h2 className='iam'>Course </h2>
                        <p className='matter'>I've built a strong foundation in the MERN stack</p>
                    </li>
                </ul>
        </div>
        
      </div>
      </div>
    );
  }
}

export default About;
