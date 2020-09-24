import React from 'react';
import Image from 'react-bootstrap/Image';
import images from '../images/glambymelissalogo.png';


const Booking = () => (
    <div>
        <div className="imageLogo">
            <img className="logo" src={images} />
        </div>
        <h1>How To Book</h1>
    </div>
);

export default Booking;