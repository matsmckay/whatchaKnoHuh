import LeaderBoardForm from '../comp/LeaderBoardForm'
import { useLocation } from "react-router-dom"
import { useState, useEffect} from 'react'
import ReactConfetti from 'react-confetti'

const LeaderBoardFormPage = ({userScore}) => {

  const [isVisible, setIsVisible] = useState(false)
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})

  const location = useLocation()

  const detectSize = () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
  }

  useEffect(() => {
      setIsVisible(true);
      window.addEventListener('resize', detectSize);
      return() => {
        window.removeEventListener('resize', detectSize);
      }
  }, [windowSize]);

  return(
      <div>
          <ReactConfetti 
          tweenDuration={100} 
          width={windowSize.width}
          height={windowSize.height}
          />
          <div className={`fadeIn ${isVisible ? 'visiable' : ''} `}>
              <div className='congrats'>Congratulations!</  div> 
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