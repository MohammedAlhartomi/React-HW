import React from 'react';
import { useParams, Link } from 'react-router-dom' 
import { useState,useEffect } from 'react';

function Family(props){
    const { id } = useParams()
    const [family,setFamily]=useState(props.houses.find((ele)=>ele.wikiSuffix===id).people)

    const familyList = family.map(
        (ele)=><Link to={`/families/${id}/members/${ele.wikiSuffix}`}>
        <li>
        {ele.name}
        </li></Link>
        )
    return (
        <ul>
        {familyList}
        <Link to={`/families/${id}/members/new`}>new member</Link>
        </ul>
    )
}

export default Family;
