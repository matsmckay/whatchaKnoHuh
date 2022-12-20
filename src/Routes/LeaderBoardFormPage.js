import {Link} from 'react-router-dom'
import LeaderBoardForm from '../comp/LeaderBoardForm'

const LeaderBoardFormPage = ({userScore}) => {
  return(
    <div>
      <section className="FormPage">
      <div className="wrapper">
        <h2>Your Score was:</h2>
        <h2>{userScore}</h2>
        <LeaderBoardForm
        userScore={userScore}
         />
      </div>
      </section>
    </div>
  )
}

export default LeaderBoardFormPage;