// src/components/About.js
import React, { Component } from 'react';
import './index.css'
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";


class Projects extends Component {
  render() {
    return (
      <div className="project-container">
        <h1 className='heading'>Projects || Assignments</h1>
        
          <ul className='projects'>
            <li className='project-cards'>
              <img src={'/shopping-img.jpeg'} width="600px" height="280px" alt='shopping' />
              <div className='content-card'>
                <h1 className='head'>Nxt Trendz ECommerce Clone</h1>
                <p className='para'>Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where
                      users can login and can see list of products with search, filters, sort by, etc..</p>
                      <span style={{color:"rgba(16, 179, 130, 1)",fontSize:"15px"}}>
                        Login:  rahul <br />
                        password:  rahul@2021
                      </span>
              </div>
              <button className='button btn dark'>
              <a href='https://github.com/Murali-git-code/Enhancement-of-Nxt-Trendz---Payment'>
                <div>
                <FaGithub color='white' size={20}/>
               <span style={{marginLeft:'10px',color:"white"}}>Code</span>
               </div>
              </a>
              </button>
              <button className='button btn primary'>
              <a href="https://musanxt.ccbp.tech/login">
                <LiaExternalLinkAltSolid  size={20}/>
                <span style={{marginLeft:'10px', color:"white"}}>Live Link </span>
                </a>
                </button>
            </li>
            <li className='project-cards'>
              <img src={'/jobby-app.jpg'} width="600px" height="280px" alt='shopping'/>
              <div className='content-card'>
                <h1 className='head'>Jobby App</h1>
                <p className='para'>Jobby App is a job search application with login, job listings, and filter features.
                      Built using React and APIs to deliver a smooth job-hunting experience.

                        </p>
                      <span style={{color:"rgba(207, 214, 212, 1)",fontSize:"15px"}}>
                        Login:  rahul <br />
                        password:  rahul@2021
                      </span>
              </div>
              <button className='button btn dark'>
              <a href='https://github.com/Murali-git-code/Jobby-App'>
                <div>
                <FaGithub color='white' size={20}/>
               <span style={{marginLeft:'10px',color:"white"}}>Code</span>
               </div>
              </a>
              </button>
              <button className='button btn primary'>
              <a href="https://musaapp.ccbp.tech/login">
                <LiaExternalLinkAltSolid  size={20}/>
                <span style={{marginLeft:'10px', color:"white"}}>Live Link </span>
                </a>
                </button>
            </li>
            <li className='project-cards'>
              <img src={'/todo-app.jpg'} width="600px" height="280px" alt='shopping' />
              <div className='content-card'>
                <h1 className='head'>Todos Application</h1>
                <p className='para'>ToDo Application is a simple yet powerful task manager to organize daily activities.
                  Users can add, edit, delete, and mark tasks as completed with a single click.
                  The app offers a clean and responsive UI for both desktop and mobile views.
                  It uses React for frontend logic and dynamic UI rendering.
                  All tasks are stored locally or can be integrated with a backend like Node.js.
                  Perfect for improving productivity and managing tasks efficiently.</p>
                      
              </div>
              <button className='button btn dark'>
              <a href='https://github.com/Murali-git-code/Enhancement-of-Simple-Todos'>
                <div>
                <FaGithub color='white' size={20}/>
               <span style={{marginLeft:'10px',color:"white"}}>Code</span>
               </div>
              </a>
              </button>
              <button className='button btn primary'>
              <a href="https://musaenhancetodo.ccbp.tech/">
                <LiaExternalLinkAltSolid  size={20}/>
                <span style={{marginLeft:'10px', color:"white"}}>Live Link </span>
                </a>
                </button>
            </li>
            <li className='project-cards'>
              <img src={'/ipl-img.jpg'} width="600px" height="280px" alt='shopping'/>
              <div className='content-card'>
                <h1 className='head'>IPL Dashboard</h1>
                <p className='para'>IPL Dashboard is a dynamic web application that showcases data from the Indian Premier League.
                    It features interactive charts, tables, and filters for exploring team and player performance.
                      Users can view match summaries, win percentages, and top scorers in real time.
                                Built using modern web technologies like React smooth interactivity.
                          The layout is responsive, ensuring a seamless experience across all devices.
                    Ideal for cricket fans and analysts looking for clean, fast, and visual insights.</p>
              </div>
              <button className='button btn dark'>
              <a href='https://github.com/Murali-git-code/IPL-Dashboard-App'>
                <div>
                <FaGithub color='white' size={20}/>
               <span style={{marginLeft:'10px',color:"white"}}>Code</span>
               </div>
              </a>
              </button>
              <button className='button btn primary'>
              <a href="https://musaiplboard.ccbp.tech/">
                <LiaExternalLinkAltSolid  size={20}/>
                <span style={{marginLeft:'10px', color:"white"}}>Live Link </span>
                </a>
                </button>
            </li>
            
            
            
          </ul>
        </div>
    );
  }
}

export default Projects;
