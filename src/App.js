import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProjectNavbar from './components/Navbar/ProjectNavbar';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
import { Route, Routes } from "react-router-dom";

function App() {
  return (

<div className='App'>
<ProjectNavbar/>
<Routes>
 <Route exact path="/" element={ <Home/>}/>
 <Route exact path="/favMovies" element={ <FavList/>}/>
 </Routes>
</div>  
);
}

export default App;