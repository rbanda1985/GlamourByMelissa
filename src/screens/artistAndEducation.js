import React from 'react';
import Image from 'react-bootstrap/Image';
import images from '../images/glambymelissalogo.png';
import videos from '../videos/salon.mp4';
import salon from '../images/salonPic.JPG';
import BootstrapCarousel from '../components/bootstrapCarousal';



const Home = () => (
    <div className="mainDiv">
        <div className="imageLogo">
        <img className="logo" src={images}/>
        </div>
        <div className="d-flex justify-content-center">
            <img className="salonFront" src={salon}/>
        </div>
        <div className='bootstrapCarousel'>
            <BootstrapCarousel>

            </BootstrapCarousel>
        </div>
        <div className="textLayout">
            <h1>Education</h1>
            <h1>Salon FAQ</h1>
        </div>
    </div>
);

export default Home;