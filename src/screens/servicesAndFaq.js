import React from 'react';
import images from '../images/glambymelissalogo.png';
import { Link } from 'react-router-dom';
import Form from '../components/form';
import Uploader from '../components/imageUpload';
import Faq from '../components/faq';
import salon from '../images/salonPic.JPG'

const Services = () => (
    <div className='mainDiv'>
        <div className='d-flex justify-content-center'>
            <img className='salonFront' alt='Salon' src={salon}/>
        </div>
        <div className="imageLogo">
           <Link to='/'> <img className="logo" alt='Glamour By Melissa Logo' src={images} /> </Link>
        </div>
        <div className='faqInfo'>
            <Faq>

            </Faq>
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