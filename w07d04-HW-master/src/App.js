import './App.css';
import {React,useState,useEffect} from 'react'
import axios from 'axios'
// import React, useState & useEffect from react here

// import axios from axios

function Character(props){
	

    return <div className="card">
    <h1>{props.name}</h1>
    <img src={props.pic}/>
    <p>Gender:{props.gender}</p>
	<p>Status:{props.status}</p>
    <p>species:{props.species}</p>
	<p>location:{props.location}</p>
    </div>
}


function App() {
	const [search,setSearch]=useState("")
const [data,setData]=useState([])
useEffect(()=>{
let charatersId=[1,2,3,4,5,6,7,8]
let url = charatersId.map( (ele)=>axios.get(`https://rickandmortyapi.com/api/character/${ele}`))
axios.all(url).then( axios.spread((...response)=>{
	
setData(response)

}))
},[])

let x = data.map((ele)=> <Character 
name={ele.data.name} 
pic={ele.data.image} 
gender={ele.data.gender} 
status={ele.data.status} 
species={ele.data.species} 
location={ele.data.location.name} 
/>)
console.log(data)
	return (<div className='App'>


	{x}

	</div>);
}

export default App;
