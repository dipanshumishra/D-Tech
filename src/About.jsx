import React, {useEffect ,useRef} from 'react';
import './about.css';
import { NavLink } from 'react-router-dom';
import {init} from 'ityped';
import about_img from './Images/about.png';
import {FaJava, FaGithubSquare} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {RiReactjsLine} from 'react-icons/ri';
import {ImHtmlFive} from 'react-icons/im';
import {IoLogoCss3} from 'react-icons/io';
import {FaBootstrap} from 'react-icons/fa';
import {SiFirebase} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {SiSublimetext , SiVisualstudiocode, SiHeroku} from 'react-icons/si';


const About = () => {
  

      const textRef = useRef();

      useEffect(()=>{
    
          init(textRef.current,
           { showCursor: true,
              backDelay:  3000,
            strings: ['Hi Everyone, I am born and brought up in Jabalpur (MP), India. I am pursuing Computer Science Enginnering from Global Nature Care Sangthan Group of Institution Jabalpur.' ],
            });
         

      },[])
      


    return (
        <div>
           <section id="header" classname="d-flex align-item-center ">
              <div className="container-fluid common-container">
                  <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row list">
                               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                 <h1>Know Who I'M ..<br/> <strong className="brand-name">I'M DIPANSHU MISHRA </strong> </h1>
                                 <h2 className="my-3 para"><span ref={textRef}></span></h2>
                                 <h4 className="my-3 para  " id="apart">Apart from coding, some other activities that I love to do! </h4>
                                    <ol>
                                      <li >Playing Games</li>
                                      <li >Playing Guitar</li>
                                      <li >Singing</li>
                                      <li >Travelling</li>
                                    </ol>

                                   <div className="quote text-center">
                                   <p>"Strive to build things that make a difference!"<br/>-Dipanshu</p>
                                   </div>
                               </div>
                               <div className="col-lg-6 order-1 order-lg-2 header-img">
                                           <img src={about_img} className="img-fluid animated" alt="Center_img" />
                                 </div>
                            </div>
                         </div>
                  </div>
              </div>
           </section>



                  <section id="skillset" classname="d-flex align-item-center ">
              <div className="container common-container">
                  <div className="row">
                        <div className="col-9 mx-auto mt-5 text-center mb-5">
                                 <h1 className="mb-3"><span>PROFESSIONAL</span> SKILLSET</h1>
                            <div className="row text-center">

                               <div className="col-md-3 pt-5 text-center pt-lg-0 col-6 ">
                                 <p><FaJava className="icons"/></p>
                               </div>

                              <div className="col-md-3 pt-5 pt-lg-0 col-6 text-center ">
                                 <p><IoLogoJavascript className="icons"/></p>
                               </div>

                                <div className="col-md-3 pt-5 pt-lg-0 col-6 ">
                                 <p><RiReactjsLine className="icons"/></p>
                               </div>

                                <div className="col-md-3 pt-5 pt-lg-0 col-6 ">
                                 <p><ImHtmlFive className="icons"/></p>
                               </div>
                                 
                                <div className="col-md-3 pt-5 pt-lg-0 col-6 ">
                                 <p><IoLogoCss3 className="icons"/></p>
                               </div>

                                <div className="col-md-3 pt-5 pt-lg-0 col-6 ">
                                 <p><FaBootstrap className="icons"/></p>
                               </div>
                               

                                <div className="col-md-3 pt-5 pt-lg-0 col-6 ">
                                 <p><SiFirebase className="icons"/></p>
                               </div>


                                <div className="col-md-3 pt-5 pt-lg-0 col-6 ">
                                 <p><GrMysql className="icons"/></p>
                               </div>

                            </div>
                         </div>
                  </div>
              </div>


              <div className="container common-container">
                  <div className="row">
                        <div className="col-9 mx-auto mt-5 text-center mb-5">
                                 <h1 className="mb-3"><span>TOOLS</span> I USE</h1>
                            <div className="row text-center ">

                               <div className="col-md-3  pt-5 text-center pt-lg-0 col-6 ">
                                 <p><SiSublimetext className="icons"/></p>
                               </div>

                              <div className="col-md-3 pt-5 pt-lg-0 col-6 text-center ">
                                 <p><SiVisualstudiocode className="icons"/></p>
                               </div>

                                <div className="col-md-3 pt-5 pt-lg-0 col-6 ">
                                 <p><FaGithubSquare className="icons"/></p>
                               </div>

                                 
                                <div className="col-md-3 pt-5 pt-lg-0 col-6 ">
                                 <p><SiHeroku className="icons"/></p>
                               </div>

                            </div>
                         </div>
                  </div>
              </div>

           </section> 



           





            
           <section id="footer" classname="d-flex align-item-center ">
              <div className="container-fluid ">
                  <div className="row">
                        <div className="col-10 mx-auto mt-2  text-center">
                            <div className="row common-container">
                               <div className="col-md-6  pt-lg-0  ">
                                 <p>Designed and Developed by Dipanshu Mishra</p>
                               </div>
                             
                               <div className="col-md-6  text-center ">
                                 <p>Copyright © 2021 D-Techno</p>
                               </div>
                            </div>
                         </div>
                  </div>
              </div>
           </section> 

          







        </div>
    )
}

export default About
