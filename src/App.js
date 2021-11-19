import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Route ,Switch} from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.js';
import Home from './Home.js';
import Service from './Service.js';
import Navbar from './Navbar.js';
import './app.css';


function App() {


  return (
     <div className="main-div">
             <Navbar/>
             <Switch>
                     <Route exact path='/' component={Home}/>
                     <Route exact path='/Home' component={Home}/>
                     <Route exact path='/contact' component={Contact}/>
                     <Route exact path='/service' component={Service}/>
                     <Route exact path='/about' component={About}/>
             </Switch>
     </div>
  );
}

export default App;
