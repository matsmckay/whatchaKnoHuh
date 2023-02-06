import LeaderBoardForm from '../comp/LeaderBoardForm'
import { useLocation } from "react-router-dom"
import { useState, useEffect} from 'react'

const LeaderBoardFormPage = ({userScore}) => {

  const [isVisible, setIsVisiable] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsVisiable(true);
  }, []);

  return(
      <div>
      <div className={`fadeIn ${isVisible ? 'visiable' : ''}`}>
        <div className='congrats'>Congratulations!</div> 
      </div>
        <section className="FormPage">
          <div className="wrapper">
            <div className="formStyling">
              <h2>Your Score was:</h2>
              <p>{location.state.userScore}</p>
              <LeaderBoardForm
              userScore={userScore}
              />
            </div>
          </div>
        </section>
      </div>
  )
}

export default LeaderBoardFormPage;