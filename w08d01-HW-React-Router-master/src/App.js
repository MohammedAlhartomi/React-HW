import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import NaveBar from './components/NavBar';
import Houses from './components/Houses';
import Member from './components/Member';
import Family from './components/Family';
import CreateFamily from './components/CreateFamily';
import AddNew from './components/AddNew';

const got= require('./gameOfThrones')

function App() {
  
  const [houses,setHouses]= useState(got.default)
  
  function createFamily(FamilyData){
  const houseCopy=houses.slice()
  houseCopy.push(FamilyData)
  setHouses(houseCopy)
  }
  function addFamilyMember(memberData,familyId){
    const houseCopy=houses.slice()

    for(var i =0;i<houseCopy.length;i++){
      if(houseCopy[i].wikiSuffix===familyId){
        houseCopy[i].people.push(memberData)
        console.log(houseCopy[i].people)
      }
    }
    setHouses(houseCopy)
    }
    console.log("new array" ,houses)
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Router>
    <NaveBar/>

    
    <Switch>
    <Route exact path="/">

</Route>

        <Route exact path="/families/new">
    <CreateFamily newFamily = {createFamily}/>
</Route>
    <Route exact path="/families">
    <Houses houses={houses}/>
</Route>

    <Route exact path="/families/:id">
    <Family houses={houses}/>
    </Route>
    
    <Route exact path="/families/:id/members/new">
    <AddNew addFamilyMember={addFamilyMember}/>
    </Route>

    <Route exact path="/families/:family_id/members/:id">
    <Member houses={houses}/>
      </Route>
    <Route path="*">
          <h1 className="mt-5">Page not Found</h1></Route>

          </Switch>
    </Router>

    </div>
  );
}

export default App;
