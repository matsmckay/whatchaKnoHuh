import { Link, Outlet } from 'react-router-dom'

const Matt = () => {
    return (
        <div>

            <Outlet />
            <p className="mattEmail">Email: <a href="mailto:matthewmckay@gmail.com">matthewmckay@gmail.com</a></p>
        </div>
    )
}

export default Matt;