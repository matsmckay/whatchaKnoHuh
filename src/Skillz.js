import { useParams } from 'react-router-dom'

const Skillz = () => {
    const { myTalent } = useParams();

    return (
        <p>I am a worldly scholar in {myTalent}</p>
    )
}

export default Skillz;