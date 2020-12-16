import React from 'react';
import images from '../images/glambymelissalogo.png';
import BootstrapCarousel from '../components/bootstrapCarousal';
import BackgroundImage from '../components/backgroundImage';



const Home = () => (
    <div className="mainDiv">
        <div className="imageLogo">
        <img className="logo" alt='Glamour By Melissa Logo' src={images}/>
        </div>
        <div>
            <BackgroundImage>

            </BackgroundImage>
        </div>
        <div className='bootstrapCarousel'>
            <BootstrapCarousel>

            </BootstrapCarousel>
        </div>
    </div>
);

export default Home;