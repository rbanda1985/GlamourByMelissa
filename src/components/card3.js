import React from 'react';
import { Link } from 'react-router-dom';
import cardImage3 from '../images/photography.jpg';

const Card3 = () => (
    <div className="card cardSize3">
  <img className="card-img-top3" src={cardImage3} alt="Card"/>
  <div className="card-body">
    <h5 className="card-title">Photography Class</h5>
    <p className="card-text">$300</p>
    <Link to='/photography' target='_blank' className="btn btn-dark">Click for details</Link>
  </div>
  </div>
)

export default Card3;