import {Link} from 'react-router-dom'
import LeaderBoardForm from '../comp/LeaderBoardForm'

const LeaderBoardFormPage = () => {
  return(
    <div>
      <div className="wrapper">
        <h2>Your Score was:</h2>
        <LeaderBoardForm />
      </div>
    </div>
  )
}

export default LeaderBoardFormPage;