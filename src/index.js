import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/home';
import Services from './screens/servicesAndFaq';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import facebook from './images/facebooklogo.jpeg';
import instagram from './images/instagram.png';


WebFont.load({
  google: {
    families: ['Parisienne', 'Cormorant Garamon', 'cursive', 'Roboto', 'sans-serif',]
  }
});



const App = () => (
  <Router>
    <div className="navcolor d-flex justify-content-start">
    <Navbar className="navcolor" variant="light" sticky="top">
    
    <Nav className="mr-auto">
      <Nav.Link href="/educationforprofessionals">Education For Professionals</Nav.Link>
      <Nav.Link href="/servicesandfaq">Services and FAQ's</Nav.Link>
      <div className='mediaLogo d-flex justify-content-end'>
      <Nav.Link href="https://www.facebook.com/glamourbymelissa1" target="_blank"><img className="fbLogo" alt='facebook logo' src={facebook} /></Nav.Link>
      <Nav.Link href="https://www.instagram.com/glamourby_melissa/" target="_blank"><img className="igLogo" alt='instagram logo' src={instagram} /></Nav.Link>
      </div>
    </Nav>
  </Navbar>
  </div>
    
    <div>
<Route exact path='/servicesandfaq' component={Services} />
<Route exact path='/' component={Home} />
  </div>
  </Router>
);


ReactDOM.render(<App />,
  document.getElementById('root'));

  export default App;


