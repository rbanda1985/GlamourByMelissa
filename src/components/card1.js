import React from 'react';
import cardImage from '../images/pose1.JPG';
import { Link } from 'react-router-dom';

const Card1 = () => (
  <div className="card cardSize1">
  <img className="card-img-top" src={cardImage} alt="Card"/>
  <div className="card-body">
    <h5 className="card-title">Balayage Class</h5>
    <p className="card-text">$650</p>
    <Link to='/balayage' target='_blank' className="btn btn-dark">Click for details</Link>
  </div>
  </div>
);

export default Card1;
