import React from 'react';
import { Link } from 'react-router-dom';
import images from '../images/glambymelissalogo.png';

const Business = () => (
    <div className='imageLogoBusiness'>
        <Link to='/'><img className='logo' style={{marginLeft:'90px', marginTop:'-30px'}} src={images} alt='Salon Logo' /></Link>
        <div>
            <h1 className='d-flex justify-content-center' style={{marginTop:'40px', fontWeight:'bold', marginLeft:'10px'}}>
                Business Class For Beginners
            </h1>
        </div>
        <div style={{marginLeft:'-10px', marginTop:'40px'}}>
            <p className='d-flex justify-content-center'>
                This class is great for new independent stylist, who are seeking direction in their business finances to establish more of a profitable revenue.
            </p>
            <p className='d-flex justify-content-center'>
                We will discuss in depth on how to market yourself in mulitple ways, and lastly how to build a more loyal clientele.
            </p>
            <p className='d-flex justify-content-center'>
                These are the 4 essentials needed to grow your business.
            </p>
            <p className='d-flex justify-content-center'>
                Class 3-4 hours
            </p>
            <p className='d-flex justify-content-center'>
                Price $300
            </p>
            <p className='d-flex justify-content-center'>
                Location: Ovation Salon Suites(Dallas)
            </p>
        </div>
    </div>
)

export default Business;