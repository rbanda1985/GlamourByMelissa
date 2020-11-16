import React from 'react';
//import { Link } from 'react-router-dom';
import cardImage2 from '../images/pic4.JPG';

const Card2 = () => (
    <div className="card cardSize2">
  <img className="card-img-top2" src={cardImage2} alt="Card"/>
  <div className="card-body">
    <h5 className="card-title">Extension Class</h5>
    <p className="card-text">$500</p>
    <p><em>Coming Soon</em></p>
  </div>
  </div>
)


export default Card2;