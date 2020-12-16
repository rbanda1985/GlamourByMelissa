import React from 'react'
import images from '../images/glambymelissalogo.png';
import { Link } from 'react-router-dom';
import Faq from '../components/faq';

const Faqs = () => (
    <div className='mainFaq'>
        <div className="imageLogoFaq">
           <Link to='/'> <img className="logo" alt='Glamour By Melissa Logo' src={images} /> </Link>
        </div>
    <div className='faqInfo'>
        <Faq>

        </Faq>
    </div>
    
    </div>
)

export default Faqs;