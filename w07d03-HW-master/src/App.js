import logo from './logo.svg';
import './App.css';
import './Student.css';
import React, { useEffect, useState } from "react";
const students= require('./Students.js')
function Student(props){
  //const [currentState, setcurrentState] = useState(0);
  const [currentClass, setcurrentClass] = useState("");
  const [currentImage, setcurrentImage] = useState("https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png");
  const [currentMessage, setcurrentMessage] = useState("");

  let clickHandler = (e)=>{
    setcurrentClass("red");
    setcurrentImage("https://i.pinimg.com/736x/7c/ac/cb/7caccbf5c21d6a9735491c3f7d26837b.jpg")
    setcurrentMessage(`I am the mighty ${props.name}, How dare you touch me!!?`)
  }
  let leftClickHandler = (e)=>{
    setcurrentClass("blue");
    setcurrentImage("https://d6ce0no7ktiq.cloudfront.net/images/stickers/485t.png")
    setcurrentMessage(`Stop. Poking. Around!!`)
  }
  let dobuleClickHandler = (e)=>{
    setcurrentClass("green");
    setcurrentImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoo5citERSP4DKv8Euz1BDWffU9Bi_HFqyYg&usqp=CAU")
    setcurrentMessage(`STOP IT!!!`)
    
    setTimeout(function() {
      setcurrentClass("");
      setcurrentImage("https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png")
      setcurrentMessage(``)
  }, 1000);
  }

  
  return <div>
    <h1 className={currentClass} onClick ={clickHandler} onContextMenu={leftClickHandler} onDoubleClick ={dobuleClickHandler}>{props.name}</h1>
    <img src={currentImage}></img>
    <p>{currentMessage}</p>

  </div>
}

function App() {
  console.log({})
  return (
    <>
    <div className="container">
      <div className="card">
      <ul>
     {students.map((ele)=><li><Student name= {ele}/></li>)}
      </ul>
      </div>
    </div>
    </>
  );
}

export default App;
