import React from 'react';
import images from '../images/glambymelissalogo.png';
import { Link } from 'react-router-dom';
import Card1 from '../components/card1';
import Card2 from '../components/card2';
import Card3 from '../components/card3';
import Card4 from '../components/card4';

const Education = () => (
    <div className='imageLogoEducate'>
        <Link to='/'><img className='logoEducate' src={images} alt='Salon Logo' /> </Link>
        <div className='educateHeader'>
            <p className='d-flex justify-content-center' style={{marginLeft:'160px'}}>I'm excited to annouce that I will be teaching classes in 2020.</p> 
            <p className='d-flex justify-content-center' style={{marginLeft:'160px'}}>I will be offering small group classes and one on one classes.</p>
            <p className='d-flex justify-content-center' style={{marginLeft:'160px'}}>I believe we learn best in small environments.</p> 
            <p className='d-flex justify-content-center' style={{marginLeft:'160px'}}>I can answer all of your questions, and be able to spend that extra one on one
                time, to help you elevate your business to the next level.</p>
        </div>
        <div className='hairClasses'>
            <div className='classType'><p>There will be 4 seperate classes for you to choose from.</p></div>
            <ul>
                <li className='d-flex justify-content-start' style={{marginLeft:'150px'}}>-Business Class(Beginners)</li>
                <li className='d-flex justify-content-start' style={{marginLeft:'150px'}}>-Balayage Class(Intermediate)</li>
                <li className='d-flex justify-content-start' style={{marginLeft:'150px'}}>-Photography Class(For anyone)</li>
                <li className='d-flex justify-content-start' style={{marginLeft:'150px'}}>-Extension Class(Intermediate</li>
            </ul>
        </div>
        

        <div className='firstCard'>
            <Card1>

            </Card1>
            <Card2>

            </Card2>
            <Card3>

            </Card3>
            <Card4>

            </Card4>
        </div>
    </div>
   
)


export default Education;