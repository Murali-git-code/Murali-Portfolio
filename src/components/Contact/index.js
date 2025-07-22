// src/components/Contact.js
import React, { Component } from 'react';
import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


import './index.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 style={{textAlign:"center"}}>Murali Modukuri</h1>
        <p style={{textAlign:"center"}}> Creating digital experiences that inspire and engage users.</p>
        <p style={{textAlign:"center",display:"flex",justifyContent:"center"}}><IoMail size={20} /> : muralimodukuri2908@gmail.com</p>
      <div className='icons'>
        <a href='https://github.com/Murali-git-code' className='margin-icons'><FaGithub size={30}/></a>
                <a href='https://www.linkedin.com/in/murali-modukuri'  className='margin-icons'><LiaLinkedinIn size={30}/></a>
          </div>
          <hr style={{border: "1px solid gray", width:"80vw"}} />
          <p style={{textAlign:"center"}}>Made with   <span><FaRegHeart size={20} /></span>   using React</p>
      </div>
    );
  }
}

export default Contact;
