import React ,{useState} from 'react'
import './contact.css';


const Contact = () => {



  const [user,setuser] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    message:"",
  });

  let name,value;
 const getUserData = (event) =>{
       
       name=event.target.name;
       value=event.target.value;
      
       setuser({...user, [name]:value});

 };

  const postData = async(e)=>{
        e.preventDefault();

      const {fname,lname,email,phone,message } = user;    
 

       if(fname && lname && email && phone && message)
       {
            
      const res = await  fetch("https://d-tech-contact-default-rtdb.firebaseio.com/dtechcontactform.json",
      {
         method:"POST",
         headers: {
                    "Content-Type":"application/json",
                  },
         body: JSON.stringify({
                fname,
                lname,
                email,
                phone,
                message,
         }),
      }
     );

      if(res){
        
        setuser({
                  fname:"",
                  lname:"",
                  email:"",
                  phone:"",
                  message:"",
        });
      }
      

      alert("Data Stored Successfully");
       }
       else
       {
           alert("Please Fill All The Data.."); 
       }

  };






	return (
		<>
        <div class="container my-5 main-cont">
          <div class="contact-section">
            <h2 class="ct-section-head">CONTACT US</h2>
            <div class="row contact-fields">
    
              <div class="col-md-8 left-form">
                <form  method="POST">
                   <div class="form-group">
                      <label class="sr-only" for="fname">First Name *</label>
                      <input class="required form-control" id="fname"
                       name="fname" value={user.fname} onChange={getUserData}
                        placeholder="First Name&nbsp;*" type="text"  required />
                   </div>
       
                   <div class="form-group">
                      <label class="sr-only" for="lname">Last Name *</label>
                      <input class="required form-control" id="lname"
                       name="lname" value={user.lname} onChange={getUserData}
                        placeholder="Last Name&nbsp;*" type="text"  required />
                   </div>
       
                   <div class="form-group">
                      <label class="sr-only" for="contactEmail">Email *</label>
                      <input class="required form-control h5-email" id="contactEmail"
                       name="email" value={user.email} onChange={getUserData}
                        placeholder="Email&nbsp;*" type="text"  required />
                   </div>
      
                   <div class="form-group">
                      <label class="sr-only" for="contactPhone">Phone *</label>
                      <input class="required form-control h5-phone" id="contactPhone" 
                      name="phone" value={user.phone} onChange={getUserData}
                       placeholder="Phone&nbsp;*" type="text"  required />
                   </div>
       
                   <div class="form-group">
                      <label class="sr-only" for="comment">Type your message here</label>
                      <textarea class="required form-control" id="comment"
                       name="message" value={user.message} onChange={getUserData}
                        placeholder="Type your message here&nbsp;*" rows="6" required></textarea>
                   </div>
                   
                   <button class="btn btn-accent mb-5" type="submit"  onClick={postData} >Submit</button>  
                 </form>
              </div>

                  <div class="col-md-4 contact-info">
  
                    <div class="phone">
                      <h2>Call</h2>
                      <a href="tel:8720065123">+91-8720065123</a>
                    </div>
   
                    <div class="email">
                       <h2>Email</h2>
                       <a href="mailto:dipanshumishra750.com">dipanshumishra750.com</a>
                    </div>
    
                    <div class="location">
                       <h2>Visit</h2>
                       <p>Damoh Naka <br/>
                          Jabalpur <br/>
                       Madhya Pradesh, (482002)<br/>
                       <a class="btn btn-accent" href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&t=m&source=embed&oe=UTF8&msa=0&mid=1Nd2QhpA8ieTo2qmArLHCTBKgVkE&ll=23.17255800000001%2C79.955063&z=17" target="_blank"><iframe src="https://www.google.com/maps/d/embed?mid=1Nd2QhpA8ieTo2qmArLHCTBKgVkE" width="240" height="220"></iframe>  Google Maps</a></p>
                    </div>

            </div>
          </div>
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

export default Contact