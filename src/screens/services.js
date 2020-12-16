import React from 'react';
import images from '../images/glambymelissalogo.png';
import { Link } from 'react-router-dom';
import Form from '../components/form';

const Services = () => (
    <div className='mainFaq'>
        <div className="imageLogoFaq">
           <Link to='/'> <img className="logo" alt='Glamour By Melissa Logo' src={images} /> </Link>
        </div>

        <div id='servicesCaption'>
            <h5 className='d-flex justify-content-center formDisclaimer'>I'm currently only accepting new clients who are looking for full transformations of color and extensions in one session.</h5>
            <h5 className='d-flex justify-content-center formDisclaimer'>I'm also accepting extension clients only.</h5>
            <h5 className='d-flex justify-content-center formDisclaimer'>Please fill out the consulation form if you are looking to get a quote</h5>
            <h5 className='d-flex justify-content-center formDisclaimer' style={{fontWeight: 'bolder'}}>My books are closed for color only appointments.</h5>
            
        </div>
        
        <div className='consultHeading'>
            <h3>Consultation Form</h3>
        </div>
        <div className='infoForm'>
        <Form>

        </Form>
        </div>
    </div>
);

export default Services;