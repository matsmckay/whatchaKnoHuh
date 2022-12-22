import app from '../firebase.js';
import {  ref, getDatabase, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import '../LeaderBoard.css'

const LeaderboardDisplay = () => {

  const [username, setUsername] = useState([]);

  useEffect(() => {

    const database = getDatabase(app);
    const dbRef = ref(database, `/user`);

    onValue(dbRef, (response) => {

      const data = response.val();
      const updatedDbInfo = [];

      for (let key in data) {
        updatedDbInfo.push(data[key]);
      }
      updatedDbInfo.sort((a, b) => b.points - a.points);
      setUsername(updatedDbInfo);
    })
  }, []);

  return (
    <div>
      <ul>
        {
          username.map((username) => {
            return (
                  <li className='leaderBoardLi' key={username.key}>
                    <p>{username.name}</p>
                    <p>{username.points}</p>
                  </li>   
            )
          })
        }
      </ul>
    </div>
  )
}

export default LeaderboardDisplay;

