import { Outlet } from 'react-router-dom'

const Leaderboard = () => {
    return (
        <div>
            <h2>The best of the best!</h2>
            <Outlet />
            <div className="topScores">
                <ul className="members">
                    <li>best</li>
                    <li>next best</li>
                    <li>next next best</li>
                </ul>
            </div>
        </div>
    )
}

export default Leaderboard;