import { Link, Routes, Route, } from 'react-router-dom';
import Home from './Routes/Home.js';
import Leaderboard from './Routes/Leaderboard.js';
import Credits from './Routes/Credits.js';
import Matt from './Routes/Matt.js';
import Daman from './Routes/Daman.js';
import Radojko from './Routes/Radojko.js';
import Tyler from './Routes/Tyler.js';
import ErrorPage from './Routes/ErrorPage.js';
import FetchCall from './comp/FetchCall.js';
import WordDef from './comp/WordDef.js';


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
