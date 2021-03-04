
import './App.css';
import { useState, useEffect } from 'react'
import axios from  'axios'
import Characters from './components/Name'

import House from './components/House'




function App() {
  const [houses, setHouses] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    let firstUrl=axios.get("https://api.got.show/api/show/characters/Petyr Baelish")
    let secondUrl=axios.get("https://api.got.show/api/show/characters/Jon Snow")
    let thirdUrl=axios.get("https://api.got.show/api/show/characters/Daenerys Targaryen")
    let fourthUrl=axios.get("https://api.got.show/api/show/characters/Tyrion Lannister")
     axios.all([firstUrl,secondUrl,thirdUrl,fourthUrl]).then(axios.spread((...responses) =>{
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responesThree = responses[2]
      const responesFour = responses[3]
      
      let data = [responseOne.data,responseTwo.data,responesThree.data,responesFour.data]
      setCharacters(data)

      let fUrl=axios.get(`https://api.got.show/api/show/houses/${responseOne.data.house}`)
      let sUrl=axios.get(`https://api.got.show/api/show/houses/${responseTwo.data.house}`)
      let tUrl=axios.get(`https://api.got.show/api/show/houses/${responesThree.data.house}`)
      let f4Url=axios.get(`https://api.got.show/api/show/houses/${responesFour.data.house}`)
      console.log(`https://api.got.show/api/show/houses/${responesFour.data.house}`)
      axios.all([fUrl,sUrl,tUrl,f4Url]).then(axios.spread((...responses) =>{
        console.log(responses[0].data)
       setHouses([responses[0].data,responses[1].data,responses[2].data,responses[3].data])
     }))

    }))
   
 
   
    
  }, [])


  console.log(houses)

  return (
    <div>
      <h1>Characters</h1>
      
      {characters.map((ele)=> <Characters name={ele.name} pic= {ele.image} house={ele.house} /> )}
      <div className="clear"></div>
      <h1>Houses</h1>
      {houses.map((ele)=> <House name={ele[0].seat[0]}  pic={ele[0].logoURL} /> )}
    </div>
  );
}

export default App;
