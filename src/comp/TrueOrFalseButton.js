import { useState } from "react"

const TrueOrFalseButton = ({triggerReRender, setTriggerReRender, displayHomo, wordDef}) => {

const [userScore, setUserScore] = useState(0)
const [progressBar, setProgressBar] = useState(0)


  

  const handleClick = () => {
    
    if ( displayHomo[0] === wordDef)
    {
      setUserScore(userScore + 1)
    }
    else {
     setUserScore(userScore -0.5)
    }
    setTriggerReRender(!triggerReRender)
    setProgressBar(progressBar +1)
    
  } 

  const handleClickTwo = () => {
    
    if ( displayHomo[1] === wordDef)
    {
      setUserScore(userScore + 1)
    }
    else {
     setUserScore(userScore -0.5)
    }
    setTriggerReRender(!triggerReRender)
    setProgressBar(progressBar +1)
  } 

  console.log(userScore)

  return(
    <div>
      <h2>{userScore}</h2>
      <h2>{progressBar}</h2>
      <button onClick={handleClick}>{displayHomo[0]}</button>
      <button onClick={handleClickTwo}>{displayHomo[1]}</button>
    </div>
  )
}

export default TrueOrFalseButton;