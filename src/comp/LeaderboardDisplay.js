import app from '../firebase.js';
import { push, ref, getDatabase, onValue, } from 'firebase/database';
import { useEffect, useState } from 'react';
import LeaderBoardForm from './LeaderBoardForm.js';

const LeaderboardDisplay = () => {

  const [username, setUsername] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      console.log(response.val())
      const updatedDbInfo = [];
      const data = response.val();

      for (let key in data) {
        updatedDbInfo.push({ key: key, name: data[key] });
      }

      setUsername(updatedDbInfo);

    })
  }, []);


  return (
    <div>
      <ul>
        {
          username.map((username) => {
            return (
              <li key={username.key}>
                <p>{username.name}</p>
              </li>
            )
          })
        }
      </ul>
      <LeaderBoardForm />
    </div>
  )
}

export default LeaderboardDisplay;

