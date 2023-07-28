import React from 'react'
import Cards from './Cards';
import { useState,useEffect} from 'react';
import '../css/Items2.css'

export default function Items(props) {
    const [ar,setAr]=useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setAr(data);
            });
    }, []);
            return (
                <div className='item2'>
                    {ar
                        .filter((el) => el.category === props.name)
                        .map((el) => (
                            <Cards id={el.id} image={el.image} title={el.title} price={el.price} rating={el.rating} />
                        ))}
                </div>
            );
}
