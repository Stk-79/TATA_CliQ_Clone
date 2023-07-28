import React, { useState } from 'react';
import "../css/Cname.css";

export default function Cname(props) {
    const [arr, setArr] = useState([]);
    const [count, setCount] = useState(0);

        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then((data) => {
                setArr(data);
                setCount(data.filter(el => el.category === props.cname).length);
            });

    return (
        <>
            <div className="p1">
                <p id="name">{props.cname}</p>
                <p id="price">{count} products</p>
            </div>
        </>
    );
}

