import {Link} from 'react-router-dom'
import LeaderBoardForm from '../comp/LeaderBoardForm'

const LeaderBoardFormPage = () => {
  return(
    <div>
      <section className="FormPage">
      <div className="wrapper">
        <h2>Your Score was: 62</h2>
        <LeaderBoardForm />
      </div>
      </section>
    </div>
  )
}

export default LeaderBoardFormPage;