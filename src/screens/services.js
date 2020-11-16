import React from 'react';
import images from '../images/glambymelissalogo.png';
import { Link } from 'react-router-dom';
import Form from '../components/form';

const Services = () => (
    <div className='mainFaq'>
        <div className="imageLogoFaq">
           <Link to='/'> <img className="logo" alt='Glamour By Melissa Logo' src={images} /> </Link>
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