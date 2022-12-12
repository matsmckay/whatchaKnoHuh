import { Link, Outlet } from 'react-router-dom'

const Credits = () => {
    return (
        <div>
            <h2>MEET THE TEAM</h2>
            {/* Outlet is where on the page you want stuff to render */}
            <ul className="creditsTeam">
                <li>
                    <Link to="/credits/radojko">Radojko Radulovic</Link>
                </li>
                <li>
                    <Link to="/credits/daman">Daman</Link>
                </li>
                <li>
                    <Link to="/credits/tyler">Tyler George</Link>
                </li>
                <li>
                    <Link to="/credits/matt">Matt McKay</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Credits;