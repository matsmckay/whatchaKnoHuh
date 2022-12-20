import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <div className='wrapper'>
                <section className='howToPlay'>
                    <div>
                        <h2>How To Play</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos voluptate odio repellat deleniti fugit consequatur, nihil, quaerat doloribus eos cum cupiditate labore corporis minima assumenda consequuntur quibusdam. Cumque, ea?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias corporis eligendi quisquam, voluptas at esse officia quae pariatur culpa! Error earum tenetur natus beatae explicabo ullam reprehenderit corrupti corporis nisi!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia laudantium deserunt, totam fugit, iste aspernatur, odit quas ad earum quo molestias ullam? Doloribus dicta blanditiis veritatis sint eius exercitationem fugiat.
                        </p>
                        <button className='play'>
                            <Link to="/GamePage">Play Now!</Link>
                        </button>
                    </div>
                </section>
            </div>
            <footer>
                <div className='wrapper'>
                    Created @ Juno 2022
                </div>
            </footer>
        </>

    )
}

export default Home;