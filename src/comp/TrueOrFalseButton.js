import { useState } from "react"
import LeaderBoardForm from "./LeaderBoardForm"

const TrueOrFalseButton = ({triggerReRender, setTriggerReRender, displayHomo, wordDef}) => {

const [userScore, setUserScore] = useState(0)
const [progressBar, setProgressBar] = useState(0)


  

  const handleClick = () => {
    
    if (progressBar < 10) {
      if ( displayHomo[0] === wordDef) {
        setUserScore(userScore + 1)
      }
      else {
        setUserScore(userScore -0.5)
       }
      setTriggerReRender(!triggerReRender)
      setProgressBar(progressBar +1)

    }
    else {
      if ( displayHomo[0] === wordDef) {
        setUserScore(userScore + 1)
      }
      else {
        setUserScore(userScore -0.5)
       }
      console.log('done done')
      // LINK TO LeaderBoardFormPage
    }
  } 

  const handleClickTwo = () => {
    if (progressBar < 10) {
      if ( displayHomo[1] === wordDef) {
        setUserScore(userScore + 1)
      }
      else {
        setUserScore(userScore -0.5)
       }
      setTriggerReRender(!triggerReRender)
      setProgressBar(progressBar +1)

    }
    else {
      if ( displayHomo[1] === wordDef) {
        setUserScore(userScore + 1)
      }
      else {
        setUserScore(userScore -0.5)
       }
      console.log('done done')
      // LINK TO LeaderBoardFormPage
    }
  } 

  console.log(userScore)

  return(
    <div>
      <h2>{userScore}</h2>
      <h2>{progressBar}</h2>
      <button onClick={handleClick}>{displayHomo[0]}</button>
      <button onClick={handleClickTwo}>{displayHomo[1]}</button>
      <LeaderBoardForm 
      userScore={userScore}
      />
    </div>
  )
}

export default TrueOrFalseButton;