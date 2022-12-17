import { Outlet } from 'react-router-dom'
import LeaderboardDisplay from '../comp/LeaderboardDisplay';

const Leaderboard = () => {
    return (
        <div>
            <h2>The best of the best!</h2>
            <Outlet />
            <div className="topScores">
                <LeaderboardDisplay />
            </div>
        </div>
    )
}

export default Leaderboard;