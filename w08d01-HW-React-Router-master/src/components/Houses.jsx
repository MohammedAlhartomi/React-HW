import React from 'react';
import { useParams, Link } from 'react-router-dom' 
import { useState,useEffect } from 'react';

function Houses  (props) {
    console.log(props.houses)
    const housesList =props.houses.map((ele)=><Link to={`/families/${ele.wikiSuffix}`}>
    <li>
    {ele.name}
    </li></Link>)
    return (
        <ul>
            {housesList}
        </ul>
    );
}

export default Houses;
