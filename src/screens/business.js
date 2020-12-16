import React from 'react';
import { Link } from 'react-router-dom';
import images from '../images/glambymelissalogo.png';
import { Button } from 'react-bootstrap';
import salon from '../images/salonPic.JPG';

const Business = () => (
    <div>
        <div className='imageLogo'>
            <Link to='/'><img className='logo' style={{marginLeft: '-15px'}} src={images} alt='Salon Logo' /></Link>
        </div>
        <div>
            <h1 className='d-flex justify-content-center' style={{marginTop: '8em', fontWeight: 'bold'}}>Business Class</h1>
        </div>
        <div style={{marginTop: '100px'}}>
            <img className='salonBusinessPic' src={salon} alt='Salon' />
        </div>
        <div>
            <p>This class is great for new independent stylist, who are seeking direction in their business finances to establish more of a profitable revenue.</p>
            <p>We will discuss in depth on how to market yourself in multiple ways, and lastly how to build a more loyal clientele.</p>
            <p>These are the 4 essentials needed to grow your business.</p>
            <p> Class 3-4 hours</p>
            <p>Price $300</p>
            <p>Location: Ovation Salon Suites(Dallas)</p>
            <Button variant='dark'><a href='https://checkout.square.site/buy/AHJQQ3D7KRARFPKJQD4Q46J2' target='_blank' rel='noopener noreferrer'>Sign Up</a></Button>
        </div>
    </div>
)

export default Business;