import { Link, Outlet } from 'react-router-dom'
import FetchCall from '../comp/FetchCall';
import Leaderboard from './Leaderboard';

const Home = () => {
    return (
        <div>
            <h2>Welcome Home!</h2>
            <div className="divBtn">
                <FetchCall />
                <Leaderboard />
                <button>
                    <Link to="/playNow">Play Now!</Link>
                </button>
            </div>
        </div>

    )
}

export default Home;