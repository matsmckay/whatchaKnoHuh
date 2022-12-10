import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Welcome Home!</h2>
            <div className="divBtn">
                <button>
                    <Link to="/playNow">Play Now!</Link>
                </button>
            </div>
        </div>

    )
}

export default Home;