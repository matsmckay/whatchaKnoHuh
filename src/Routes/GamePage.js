import { Link, Outlet } from 'react-router-dom'

import FetchCall from '../comp/FetchCall';
import Leaderboard from './Leaderboard';

const GamePage = () => {
    return (
        <div>
            <div className='wrapper'>
                <h2>Game</h2>
                <div className="divBtn">
                    <FetchCall />
                    {/* <Leaderboard /> */}
                </div>
            </div>
        </div>

    )
}

export default GamePage;