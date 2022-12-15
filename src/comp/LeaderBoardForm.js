import app from '../firebase.js';
import {push, ref, getDatabase, remove, } from 'firebase/database';
import { useState } from 'react';

const LeaderboardForm = () => {

  const [userInput, setUserInput] = useState([]);

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

  // DONT FORGET TO REMOVE THIS WHEN FINISHED !!!!

  const handleRemove = (event) => {
    event.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database);

    remove(dbRef);
  }

  return(
    <div>
        <form action="submit">
          <label htmlFor="newUsername">Please enter your name:</label>
          <input type="text" id="newUsername" onChange={handleInputChange} value={userInput} />
          <button onClick={handleSubmit}>Yeeeeeeah!</button>
          <button onClick={handleRemove}>clear</button>
        </form>
    </div>
  )
}

export default LeaderboardForm;


// Cant code until i fix this merge issue tmr so heres some pseudo
// change handleSubmit to use the update function import from firebase instead of push. That way itll update the value of a node th