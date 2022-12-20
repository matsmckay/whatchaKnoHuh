import app from '../firebase.js';
import { push, ref, getDatabase, remove, } from 'firebase/database';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const LeaderBoardForm = () => {

  const [userInput, setUserInput] = useState([]);
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // const results = 50
    const newUser = {
      name: userInput,
      points: 0
    }

    const database = getDatabase(app);
    // const dbRef = ref(database);
    const usersNodeRef = ref(database, `/user`)

    push(usersNodeRef, newUser);
    setUserInput('');
    //  console.log(results)
    if (newUser) {
      navigate("/leaderboard")
    }
  }

  // DONT FORGET TO REMOVE THIS WHEN FINISHED !!!!

  const handleRemove = (event) => {
    event.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database, `/user`);
    console.log(dbRef);
    remove(database, `/user`);
  }

  // This handlePointCounter will be added to the logic for which word is true / false, just writing it here to cause im silly 

  // const handlePointCounter = (event) => {
  //   event.preventDefault();


  // }

  return (
    <div>
      <p>{userInput}</p>
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

export default LeaderBoardForm;


// score counter
// add a function / funciton def to the onClick that is attacted to the button that the user selects when decieding which word is correct
// 