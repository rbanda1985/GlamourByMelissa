import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/artistAndEducation';
import Booking from './screens/servicesAndFaq';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import Image from 'react-bootstrap/Image';
import facebook from './images/facebooklogo.jpeg';
import instagram from './images/instagram.png';


WebFont.load({
  google: {
    families: ['Parisienne', 'Cormorant Garamon', 'cursive', 'Roboto', 'sans-serif',]
  }
});



const App = () => (
  <Router>
    <div className="navcolor d-flex justify-content-end">
    <Navbar className="navcolor" variant="light" sticky="top">
    <Nav className="mr-auto">
      <Nav.Link href="https://www.facebook.com/glamourbymelissa1" target="_blank"><img className="fbLogo" src={facebook} /></Nav.Link>
      <Nav.Link href="https://www.instagram.com/glamourby_melissa/" target="_blank"><img className="igLogo" src={instagram} /></Nav.Link>
    </Nav>
  </Navbar>
    </div>
    
    <div>
<Route exact path='/booking' component={Booking} />
<Route exact path='/' component={Home} />
  </div>
  </Router>
);


ReactDOM.render(<App />,
  document.getElementById('root'));

  export default App;


