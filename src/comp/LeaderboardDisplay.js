import app from '../firebase.js';
import { push, ref, getDatabase, onValue, get } from 'firebase/database';
import { useEffect, useState } from 'react';
import LeaderboardForm from './LeaderBoardForm.js';

const LeaderboardDisplay = () => {

  const [username, setUsername] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const dbRef = ref(database, `/user`);
    console.log(dbRef);

    onValue(dbRef, (response) => {

      const data = response.val();

      console.log(data);

      const updatedDbInfo = [];

      for (let key in data) {
        console.log(data[key]);
        updatedDbInfo.push(data[key]);
        setUsername(updatedDbInfo);
      }

    })

  }, []);

  console.log(username);
  return (
    <div>
      <ul>
        {
          username.map((username) => {
            return (
              <li key={username.key}>
                <p>{username.name}</p>
                <p>{username.points}</p>
              </li>
            )
          })
        }
      </ul>
      <LeaderboardForm />
    </div>
  )
}

export default LeaderboardDisplay;

