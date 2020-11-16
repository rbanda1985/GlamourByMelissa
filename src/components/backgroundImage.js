
import salon from '../images/salonPic.JPG';
import React from 'react';

const BackgroundImage = () => {
    return (
       <div>
           <img className='salonFront' alt='salon' src={salon} />
        </div>
    )
}

export default BackgroundImage;