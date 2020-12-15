import React from 'react';
import images from '../images/glambymelissalogo.png';
import { Link } from 'react-router-dom';
import balayagePic from '../images/balayageClass.JPG';
import { Button } from 'react-bootstrap';


const Balayage = () => (
    <div className='imageLogo'>
        <Link to='/'><img className='logo' src={images} alt='Salon Logo' /></Link> 
    <div>
        <h1 className='d-flex justify-content-center' style={{marginTop:'40px', fontWeight:'bold'}}>Balayage Class</h1>
    </div>
    <div className='classBalayagePic'>
        <img className='balayagePic' src={balayagePic} alt='Balayage Pic' />
    <div>
        <p>This class is for stylist that are already behind the chair.</p>
        <p>This will be a demo class only.</p>
        <p>This technique will focus on creating depth and contrast.</p>
        <p>Detailing the hairline around the face for those pops or brightness.</p>
        <p>We will create dimensional contrast working with the natural haricolor at the roots for a softer grow out.</p>
        <p>Brightening the tips of the hair so your client feels bright blonde.</p>
        <p>This technique is great for those clients who are low maintenance.</p>
        <p>Touch ups are only needed every 3-6+ months, depending on clients hair goals and texture of hair.</p>
        <p>Price: $650</p>
        <p style={{marginLeft: '450px'}}>Time: 5-6 hours.</p>
        <Button style={{marginLeft: '450px'}} variant='dark'><a href='https://checkout.square.site/buy/GHTWDL6EN4Z7NM5EYY4AWVSB' target='_blank' rel='noopener noreferrer'>Sign Up</a></Button>
    </div>
    </div>
    </div>
)

export default Balayage;