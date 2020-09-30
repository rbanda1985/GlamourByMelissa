import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import pic from '../images/pic.JPG';
import pic1 from '../images/pic1.JPG';
import pic2 from '../images/pic2.JPG';
import pic3 from '../images/pic3.JPG';
import pic4 from '../images/pic4.JPG';

class BootstrapCarousel extends React.Component {
    render () {
        return (
            <div>
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-sm-12">
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-7'>
                            <Carousel>
                                <Carousel.Item>
                                    <img className='d-block w-100' src={pic} alt='First Slide' />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className='d-block w-100' src={pic1} alt='Second Slide' />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className='d-block w-100' src={pic2} alt='Third Slide' />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className='d-block w-100' src={pic3} alt='Fourth Slide' />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className='d-block w-100' src={pic4} alt='Fifth Slide' />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarousel;
