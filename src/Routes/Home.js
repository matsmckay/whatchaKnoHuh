import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <>
            <div className='wrapper'>
                <section className='howToPlay'>
                    <div className='howToFlex'>
                        <h2>How To Play</h2>
                        <p>
                        This is a learning game. Players will be presented with two randomly generated homophonous words - like piece and peace - and a single definition. Players must match the correct spelling to the definition. 
                        There are up to 10 questions. Each correct answer is worth 1 point. However, if a player chooses the wrong homophonous, they loose -0.5 points. 
                        At the end, players have the option to save their score to the leaderboard! 
                        </p>
                        <div className='btnDiv'>
                            <button className='play'>
                                <Link to="/GamePage">Play Now!</Link>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default Home;