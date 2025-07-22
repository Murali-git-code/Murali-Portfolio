// src/components/About.js
import React, { Component } from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";




import './index.css'
class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <h1 className='heading'>Skills & Technologies</h1>
        <div className='card-container'>
          <div>
           <h1 style={{color:'#e0d3d3ff'}}>Frontend</h1>
          <ul className='skills'>
            <li className='icons0'>
              <FaHtml5 size={40} style={{backgroundColor: '#f06529', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>HTML5</p>
            </li>
            <li className='icons0'>
              <FaCss3Alt size={40} style={{backgroundColor: '264de4', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>CSS3</p>
            </li>
            <li className="icons0">
              <FaReact size={40} style={{backgroundColor: '#61DBFB', color:'000', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>React.js</p>
            </li>
            
            <li className='icons0'>
              <SiJavascript size={40} style={{backgroundColor: 'F7DF1E', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>Javascript</p>
            </li>
            <li className='icons0'>
              <FaBootstrap size={40} style={{backgroundColor: 'rgb(121, 82, 179)', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>Bootstrap</p>
            </li>
            
            
        </ul>
        </div>
        <div>
        <h1 style={{textAlign:'center', color:'#cfbdbdff'}}>Backend</h1>
        <ul className='skills'>
            <li className='icons0'>
              <FaNode size={40} style={{backgroundColor: '3C873A', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>Node.js</p>
            </li>
            <li className='icons0'>
              <SiExpress size={40} style={{backgroundColor: '000000', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>Express.js</p>
            </li>
            <li className='icons0'>
              <BiLogoMongodb size={40} style={{backgroundColor: '4DB33D', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>Mongo.DB</p>
            </li>
            <li className='icons0'>
              <MdAdminPanelSettings size={40} style={{backgroundColor: 'rgba(75, 47, 47, 1)', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>REST API</p>
            </li>
            <li className='icons0'>
              <AiOutlineConsoleSql size={40} style={{backgroundColor: 'rgba(41, 41, 41, 1)', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>SQL</p>
            </li>
          
              </ul>
        </div>
        <div>
          <h1 style={{color:'#cfbdbdff'}}>Tools</h1>
        <ul className='skills'>
            <li className='icons0'>
              <FaGithubSquare size={40} style={{backgroundColor: '#0c0c0cffff', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'white', fontSize:'13px'}}>Github</p>
            </li>
            <li className='icons0'>
              <IoLogoFigma size={40} style={{background: 'linear-gradient(to right, #F24E1E, #A259FF, #1ABCFE)', color:'white', borderRadius:'5px'}}/>
                <p style={{margin:'3px', color:'#faf9fcff', fontSize:'13px'}}>Figma</p>
            </li>
        </ul>
        </div>
        </div>
        </div>
        
      
     
    );
  }
}

export default Skills;
