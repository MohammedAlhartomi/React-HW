import React from 'react';
import { useParams, Link } from 'react-router-dom' 
import { useState,useEffect } from 'react';

function Member  (props) {
    const { family_id,id } = useParams()
    const [Member,setMember]=useState([])

    useEffect(() => {
        const searchMember = props.houses
        .find((ele)=>ele.wikiSuffix===family_id)
        .people
        .find((ele)=>ele.wikiSuffix===id);
        setMember(searchMember)
        console.log(searchMember)
      }, []);

    return (
        <div>
            <li>name:{Member.name}</li>
            <li>description:{Member.description}</li>
        </div>
    );
}

export default Member;
