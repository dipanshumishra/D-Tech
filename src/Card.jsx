import React from 'react';
import  ReactDOM  from 'react-dom';
import './card.css';
import Api from './Api.jsx';


const  Card = () =>{
    return (
        <>
            
            

           <div className="container service-div mt-2 pt-5 text-center mb-5 mb-sm-0">
              <h1>MY Recent <span>Works</span></h1>
              <p id="paragraph">Here are few projects I've worked on recently.</p>
              <div className="row mb-5">
                 
                  {Api.map((val)=>{
                   const {name,link,desc} = val;
                    return (
                             <>
                                <div className=" col-md-6 col-lg-4 col-12 image my-3">
                                  <div class="card mx-auto">
                                     <img class="card-img-top" src={link} alt="Card image cap"/>
                                      <div class="card-body">
                                          <h5 class="card-title">{name}</h5>
                                          <p class="card-text">{desc}</p>
                                      </div>
                                  </div>
                                </div>
                             </>
                           );
                  })}
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

export default Card

