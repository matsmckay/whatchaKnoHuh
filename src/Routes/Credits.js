import '../Credits.css';
import { Link, Outlet } from 'react-router-dom';

const Credits = () => {
    return (
        <div className="creditsDiv">
            <div className="wrapper">
                <h2 className="creditHeader">MEET THE TEAM</h2>
                {/* Outlet is where on the page you want stuff to render */}
                <ul className="creditsTeamUl">
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U044ASBKNFM-bc3823597214-512" alt="" />
                        <Link to="/credits/radojko" className="team">Radojko Radulovic</Link>
                        <p className="creditBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident, inventore excepturi nesciunt neque sed temporibus error explicabo dolorem, quo ducimus sit! Porro atque veniam est animi tempore quaerat ut.</p>
                        <p><a href="https://www.radojkoradulovic.com">radojkoradulovic.com</a></p>
                        <p><a className="email" href="mailto:radulovicradojko@gmail.com">Contact</a></p>
                    </li>
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U044PJ6CK41-98d008615619-512" alt="" />
                        <Link to="/credits/daman" className="team">Daman Matharoo</Link>
                        <p className="creditBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident, inventore excepturi nesciunt neque sed temporibus error explicabo dolorem, quo ducimus sit! Porro atque veniam est animi tempore quaerat ut.</p>
                        <p><a href="https://www.damanmatharoo.com">damanmatharoo.com</a></p>
                        <p><a className="email" href="mailto:damanmatharoo4@gmail.com">Contact</a></p>
                    </li>
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U044PJ67L2D-9fd4f1335035-512" alt="" />
                        <Link to="/credits/tyler" className="team">Tyler George</Link>
                        <p className="creditBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident, inventore excepturi nesciunt neque sed temporibus error explicabo dolorem, quo ducimus sit! Porro atque veniam est animi tempore quaerat ut.</p>
                        <p><a href="https://www.tylergeorge.com">tylergeorge.com</a></p>
                        <p><a className="email" href="mailto:tylerGeorge@email.com">Contact</a></p>
                    </li>
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U0444AVFR9U-7196a93dd413-512" alt="" />
                        <Link to="/credits/matt" className="team">Matthew McKay</Link>
                        <p className="creditBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab nobis eaque officiis at culpa dolor ipsam sint! Nulla eligendi earum mollitia, labore aliquid molestias? Nostrum, magni neque! Distinctio, aut?</p>
                        <p><a href="https://www.matthewmckay.com">matthewmckay.com</a></p>
                        <p><a className="email" href="mailto:matthewmckay@gmail.com">Contact</a></p>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    )
}

export default Credits;