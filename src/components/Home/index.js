// src/components/Home.js
import React, { Component } from 'react';
import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className='home'>
          <div>
            <h1 style={{textAlign:"center",color:"#00BFFF"}}>Murali Modukuri</h1>
            <p>I'm a Passionate MERN Stack Developer With a Strong Foundation In Building Responsive, User-Friendly Web Applications. I Love Turning Ideas Into Real-World Digital Solutions And Continuously Strive To Improve My Skills And Learn New Technologies.</p>
        </div>
        <div className='bt'>
            <button className='view'><a href='https://github.com/Murali-git-code'>View My Work</a></button>
            <button className='resume'><a href='https://drive.google.com/file/d/1kds35NuI3yVIEOSW-7wMmmbf1R2qZ4Dy/view?usp=drivesdk'>View My Resume</a></button>
        </div>
        <div className='icons'>
        <a href='https://github.com/Murali-git-code' className='margin-icons'><FaGithub size={30}/></a>
        <a href='https://www.linkedin.com/in/murali-modukuri'  className='margin-icons'><LiaLinkedinIn size={30}/></a>
        
        </div>
      </div>
    );
  }
}

export default Home;
