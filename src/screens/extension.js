import React from 'react';
import { Link } from 'react-router-dom';
import images from '../images/glambymelissalogo.png';

const Extensions = () => (
    <div className='imageLogo'>
        <Link to='/'><img className='logo' src={images} alt='Salon Logo' /></Link>
    <div>
        <h1 className='d-flex justify-content-center' style={{marginTop:'40px', fontWeight:'bold'}}>
            Extension Class
        </h1>
    </div>
    <div>
        
    </div>
    </div>
)


export default Extensions;