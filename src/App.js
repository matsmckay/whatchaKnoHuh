import './App.css'
import './HomeStyles.css'

import { Link, Routes, Route, } from 'react-router-dom';
import GamePage from './Routes/GamePage.js';
import Leaderboard from './Routes/Leaderboard.js';
import Credits from './Routes/Credits.js';
import Matt from './Routes/Matt.js';
import Daman from './Routes/Daman.js';
import Radojko from './Routes/Radojko.js';
import Tyler from './Routes/Tyler.js';
import ErrorPage from './Routes/ErrorPage.js';
import Home from './Routes/Home';





function App() {
  return (
    <div className='homePage'>
      <div className='wrapper'>
        <header className='header'>
          <h1> <Link to="/">What do YOU no?</Link></h1>
          <nav>
            <ul className='navUl'>
              <li>
                <Link to="/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link to="/credits">Credits</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
  

      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/leaderboard" element={<Leaderboard />}></Route>

        <Route path="/credits/" element={<Credits />} >
          <Route path="radojko" element={<Radojko />} />
          <Route path="daman" element={<Daman />} />
          <Route path="tyler" element={<Tyler />} />
          <Route path="matt" element={<Matt />} />
        </Route>


      </Routes>
    </div>
  );
}


export default App;
