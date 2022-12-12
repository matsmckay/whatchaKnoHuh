import './App.css';
import { Link, Routes, Route, } from 'react-router-dom';
import './Route.css';
import Home from './Home.js';
import Leaderboard from './Leaderboard.js';
import Credits from './Credits.js';
import Matt from './Matt.js';
import Daman from './Daman.js';
import Radojko from './Radojko.js';
import Tyler from './Tyler.js';
import ErrorPage from './ErrorPage.js';


function App() {
  return (
    <div className="App">
      <h1>SQUAAAAD UUPPP </h1>
      <FetchCall />
      
   
    </div>
  );
}


export default App;
