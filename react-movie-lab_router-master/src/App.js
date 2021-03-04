import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import NaveBar from './components/NaveBar';
import AllMovies from './components/Allmovies'
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ShowOneMovie from './components/ShowOneMovie';
import { useState } from 'react';


function App() {
  const [selectMovie , setSelectMovie] = useState({})


  return (
    <div className="">

      <Router >


        <NaveBar />
        <Route path="/movies/:id">
        <ShowOneMovie selectMovie={selectMovie} />
        </Route>

        <Route exact path="/movies">
          <AllMovies setSelectMovie = {setSelectMovie} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Footer />


      </Router>
    </div>
  );
}

export default App;
