import app from '../firebase.js';
import {push, ref, getDatabase, onValue, remove, } from 'firebase/database';
import { useEffect, useState } from 'react';

const Leaderboard = () => {

  const [username, setUsername] = useState([]);
  const [userInput, setUserInput] = useState([]);

  useEffect( () => {
    const database = getDatabase(app);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {

      const updatedDbInfo = [];
      const data = response.val();

      for (let key in data){
        updatedDbInfo.push({key:key, name:data[key]});
      }

      setUsername(updatedDbInfo);

    })
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database);

    push(dbRef, userInput);
    setUserInput('');

  }

  const handleRemove = (event) => {
    event.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database);

    remove(dbRef);
  }
 
  return(
    <div>
      <h1>Leaderboard</h1>
        <ul>
          {
            username.map( (username) => {
              return(
                <li key={username.key}>
                  <p>{username.name}</p>
                </li>
              )
            })
          }
        </ul>

        <form action="submit">
          <label htmlFor="newUsername">Please enter your name:</label>
          <input type="text" id="newUsername" onChange={handleInputChange} value={userInput} />
          <button onClick={handleSubmit}>Yeeeeeeah!</button>
          <button onClick={handleRemove}>clear</button>
        </form>
    </div>
  )
}

export default Leaderboard;

