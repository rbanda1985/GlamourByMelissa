import React from 'react';
import { Link } from 'react-router-dom';
import cardImage4 from '../images/salonPic.JPG';

const Card4 = () => (
    <div className="card cardSize3">
  <img className="card-img-top4" src={cardImage4} alt="Card"/>
  <div className="card-body">
    <h5 className="card-title">Business Class</h5>
    <p className="card-text">$500</p>
    <Link to='/business' target='_blank' className="btn btn-primary">Click for details</Link>
  </div>
  </div>
)

export default Card4;