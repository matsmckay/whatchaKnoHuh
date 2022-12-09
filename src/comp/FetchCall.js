import { useEffect, useState } from "react";
import axios from "axios";


const FetchCall = () => {

    const [homoWords, setHomoWords] = useState([]);

    useEffect(() => {

        axios({
            url: "api.datamuse.com/words",
            method: "GET",
            dataResponse: "json",
            params : {
              rel_hom: "course" 
            }
        }).then((res) => {
            console.log(res);
            setHomoWords(res)
        })

    }
    ,[])

    return (
        <div>
            <h2>Issa Test Yoo Reelaxxx</h2>

        </div>
    )
}

export default FetchCall;