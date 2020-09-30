import React from 'react';
import images from '../images/glambymelissalogo.png';
import salon from '../images/salonPic.JPG';
import BootstrapCarousel from '../components/bootstrapCarousal';



const Home = () => (
    <div className="mainDiv">
        <div className="imageLogo">
        <img className="logo" alt='Glamour By Melissa Logo' src={images}/>
        </div>
        <div className="d-flex justify-content-center">
            <img className="salonFront" alt='Salon' src={salon}/>
        </div>
        <div className='bootstrapCarousel'>
            <BootstrapCarousel>

            </BootstrapCarousel>
        </div>
    </div>
);

export default Home;