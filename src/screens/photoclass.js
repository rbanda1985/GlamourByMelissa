import React from 'react';
import images from '../images/glambymelissalogo.png';
import { Link } from 'react-router-dom';
import photoPic from '../images/photography.jpg'; 
import { Button } from 'react-bootstrap';


const Photography = () => (
    <div>
        <div className='imageLogo'>
        <Link to='/'><img className='logo' src={images} alt='Salon Logo'/></Link>
        </div>
        <div>
            <h1 className='d-flex justify-content-center' style={{marginTop: '8em', marginLeft: '50px', fontWeight: 'bold'}}>Photography Class For Hair Stylist</h1>
        </div>
        <div className='photoClassPic'>
            <img className='photographyPic' src={photoPic} alt='Photography'/>
        </div>
        <div>
            <p>This class is for anyone and everyone who wants to step up their photography skills.</p>
            <p>I will show you how I create my signature styling, different poses for different clients, and lighting to capture the perfect hair shot.</p>
            <p>Class 2-3 hours</p>
            <p>Price: $300</p>
            <p>Location: Ovation Salon Suites</p>
            <Button variant='dark'><a href='https://checkout.square.site/buy/GDR255TZQCYY7BRZ5RGJUT3Z' target='_blank' rel='noopener noreferrer'>Sign Up</a></Button>
        </div>
    </div>
    
)

export default Photography;