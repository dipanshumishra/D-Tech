import Home_img from "./Images/ab.png";
import avatar from './Images/avtar.png';
import React, {useEffect ,useRef} from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import {init} from 'ityped';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa';
const Home = () => { 
  

      const textRef = useRef();


      useEffect(()=>{
    
          init(textRef.current,
           { showCursor: true,
              backDelay:  1500,
            strings: ['Mern Stack Developer', 'Open Source Contributor' , 'React.js Developer' , 'Java Developer' ],
            });
   
      },[])


    return (
        <>
         
           <section id="header" classname="d-flex align-item-center ">
              <div className="container-fluid common-container">
                  <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                 <h1>Hi There 👋🏻! <br/> <strong className="brand-name">I'M DIPANSHU MISHRA </strong> </h1>
                                 <h2 className="my-3 para"><span ref={textRef}></span></h2>
                                   <div className="mt-5 buttons d-flex justify-content-around  last-btn">
                                     <NavLink to='./service' className=" text-center btn-get-started ">Service's</NavLink>
                                   </div>
                               </div>
                             
                               <div className="col-lg-6 order-1 order-lg-2 header-img">
                                           <img src={Home_img} className="img-fluid animated" alt="Center_img" />
                                 </div>
                            </div>
                         </div>
                  </div>
              </div>
           </section> 

            <section id="intro" classname="d-flex align-item-center ">
              <div className="container-fluid ">
                  <div className="row">
                        <div className="col-10 mx-auto mt-5">
                                  <h1 className="text-center">LET ME INTRODUCE MYSELF</h1>
                            <div className="row common-container">
                               <div className="col-md-6  pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column para">
                                  <p>I fell in love with programming and I have at least learnt something, I think🤷‍♂</p>
                                  <p>I am fluent in classics like <span>C, JAVA, SQL,React.js, HTML5, CSS3, Bootstrap, Firebase</span> .</p>
                                  <p>My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing.</p>
                                   <p>Whenever possible, I also apply my passion for developing products with <span>Node.js</span> and <span>Modern Javascript Library</span> and Frameworks  like <span>React.js</span>.</p>
                               </div>
                             
                               <div className="col-lg-6 order-1 order-lg-2 avtar-img mb-5">
                                           <img src={avatar} className="img-fluid animated img-fluid" alt="Center_img" />
                                 </div>
                            </div>
                         </div>
                  </div>
              </div>
           </section> 


              <div className="container text-center findme">
                 
                    <h1>FIND ME ON</h1>
                    <p>Feel free to <span>connect</span> with me</p>
                     <div className="icons mb-5">
                                     <NavLink to='./Home' className="btn-get-started "><FaFacebookSquare className="facebook"/></NavLink>
                                     <NavLink to='./Home' className="btn-get-started mx-5"><FaInstagramSquare className="insta"/></NavLink>
                                     <NavLink to='./Home' className="btn-get-started mx-5"><FaTwitterSquare className="twitter"/></NavLink>
                                     <NavLink to='./Home' className="btn-get-started "><FaLinkedin className="linkedin"/></NavLink>
                     </div>
              </div>


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



        </>
    )
}

export default Home
