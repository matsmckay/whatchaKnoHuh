import './App.css'

import { Link, Routes, Route, } from 'react-router-dom';
import GamePage from './Routes/GamePage.js';
import Leaderboard from './Routes/Leaderboard.js';
import Credits from './Routes/Credits.js';
import Matt from './Routes/Matt.js';
import Daman from './Routes/Daman.js';
import Radojko from './Routes/Radojko.js';
import Tyler from './Routes/Tyler.js';
import ErrorPage from './Routes/ErrorPage.js';





function App() {
  return (
    <div>
      <h1>Da **** do you know??</h1>
      <nav>
        <ul>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/credits">Credits</Link>
          </li>
        </ul>
      </nav>


      <button>
          <Link to="/GamePage">Play Now!</Link>
      </button>


      <Routes>
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
