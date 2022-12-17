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

  // This handlePointCounter will be added to the logic for which word is true / false, just writing it here to cause im silly 

  // const handlePointCounter = (event) => {
  //   event.preventDefault();


  // }

  return(
    <div>
        <form action="submit">
          <label htmlFor="newUsername">Please enter your name:</label>
          <input type="text" id="newUsername" onChange={handleInputChange} value={userInput} />
          <button onClick={handleSubmit}>Yeeeeeeah!</button>
          <button onClick={handleRemove}>clear</button>
          {/* <button onClick={handlePointCounter}>Right Answer</button> */}
        </form>
    </div>
  )
}

export default LeaderboardForm;


// score counter
// add a function / funciton def to the onClick that is attacted to the button that the user selects when decieding which word is correct
// 