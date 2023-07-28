import React from 'react'
import "../css/Sort.css"
import Items from './Items'
import Items2 from './Items2'
import Filters from './Filters'
import { useState } from 'react';
export default function Sort(props) {
    const [b,setB] = useState(false);
    function small() {
        setB(false); 
        console.log("small function called");
    }

    function large() {
        setB(true); 
        console.log("Large function called");
    }
    console.log("current value of b is ",b );
    return (
        <>
            <div className="dd">
                <div className="dropdown">
                    <div>sort:</div>
                    <select className='s'>
                        <option value="Popularity">Popularity</option>
                        <option value="Price low to high">Price low to high</option>
                        <option value="Price high to low">Price high to low</option>
                    </select>
                </div>
                <div>
                    {b ? (<button className="nsb" onClick={small}>view2</button>) : (<button className="nsb" onClick={large}>view1</button>)}
                </div>
            </div>
            <div className='mn'>
                <Filters name={props.aname}/>
                {b ? (<Items name={props.aname}/>) : (<Items2 name={props.aname}/>)}
            </div>
        </>
    )
}
