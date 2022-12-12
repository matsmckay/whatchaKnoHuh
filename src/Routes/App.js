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
    <div>
      <h1>Da **** do you know??</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/credits">Credits</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/leaderboard" element={<Leaderboard />}></Route>

        <Route path="/credits/" element={<Credits />} >
          <Route path="radojko" element={<Radojko />} />
          <Route path="daman" element={<Daman />} />
          <Route path="tyler" element={<Tyler />} />
          <Route path="matt" element={<Matt />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </div>
  );
}


export default App;
