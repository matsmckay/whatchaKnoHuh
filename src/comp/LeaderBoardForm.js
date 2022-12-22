import app from '../firebase.js';
import { push, ref, getDatabase } from 'firebase/database';
import { useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';

const LeaderBoardForm = () => {
  const location = useLocation()

  const [userInput, setUserInput] = useState([]);
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: userInput,
      points: location.state.userScore
    }

    const database = getDatabase(app);
    const usersNodeRef = ref(database, `/user`)

    push(usersNodeRef, newUser);
    setUserInput('');

    if (newUser) {
      navigate("/leaderboard")
    }
  }

  return (
    <div className='LeaderForm'>
      <form action="submit">
        <label htmlFor="newUsername"></label>
        <input type="text" 
        id="newUsername" 
        onChange={handleInputChange} 
        value={userInput} 
        placeholder='Please enter your name'
        required
        />
        <button onClick={handleSubmit} className='userNameInputButton'>Yeeeeeeah!</button>
      </form>
    </div>
  )
}

export default LeaderBoardForm;

