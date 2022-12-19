import '../Credits.css';
import { Link, Outlet } from 'react-router-dom';

const Credits = () => {
    return (
        <div className="creditsDiv">
            <h2>MEET THE TEAM</h2>
            {/* Outlet is where on the page you want stuff to render */}
            <ul className="creditsTeamUl">
                <li className="creditsTeamLi">
                    <Link to="/credits/radojko" className="team">Radojko Radulovic</Link>
                </li>
                <li className="creditsTeamLi">
                    <Link to="/credits/daman" className="team">Daman Matharoo</Link>
                </li>
                <li className="creditsTeamLi">
                    <Link to="/credits/tyler" className="team">Tyler George</Link>
                </li>
                <li className="creditsTeamLi">
                    <Link to="/credits/matt" className="team">Matt McKay</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Credits;