import React from 'react'
import '../css/Filters.css'
export default function Filters(props) {
  return (
    <div className='main'>
      <div className='p'>
        <div className='tx'>Filters</div>
        <div className='ic' id='ca'>Clear ALL</div>
      </div>
      <div className='p2'>
        <div id='tx2'>Department</div>
        <div id='ic2'>{props.name}</div>
      </div>
      <div className='p'>
        <div className='tx'>Category</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Brand</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Size</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Type</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Color</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Price</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Fit</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Fabric Family</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Discount</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Sleeve</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Collar</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Pattern</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Occasion</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>All Discount</div>
        <div className='ic'>+</div>
      </div>
      <div className='p'>
        <div className='tx'>Availability</div>
        <div className='ic'>+</div>
      </div>
    </div>
  )
}
