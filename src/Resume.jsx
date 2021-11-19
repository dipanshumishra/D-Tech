import React from 'react';
import { NavLink } from 'react-router-dom';
import resume from "./Resume_Dipanshu.pdf";
import './resume.css';

import {BsDownload} from 'react-icons/bs';


const Resume = () => {
	return (
		<>
            <div className="Main-resume text-center mt-5 mr-lg-4">
            	  <NavLink to='./Resume' className="resumebtn "> <BsDownload className="iconresume"/>  Download CV</NavLink>
            </div>	      	

             <div className="container resume-div text-center my-5">
              <embed src={resume} type="application/pdf" className="resume-pdf"></embed>
             	
             </div>

		</>
	)
}


export default Resume