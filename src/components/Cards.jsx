import React from 'react'
import '../css/Cards.css'
import { Link } from 'react-router-dom';

export default function Cards({ id,image,title,price,rating}) {
  return (
  <>
      <div className="card">
      <Link to={`/products/${id}`}>
        <div id='im'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img src={image} alt=""/> 
        </a>
        </div>
        <p>{title}</p>
        <p>${price}</p>
        <p>{rating.rate}*  [{rating.count}]</p>
        </Link>
      </div>
  </>
  );
}