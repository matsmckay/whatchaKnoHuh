import LeaderBoardForm from '../comp/LeaderBoardForm'
import { useLocation } from "react-router-dom"

const LeaderBoardFormPage = ({userScore}) => {

  const location = useLocation()

  return(
    <div>
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