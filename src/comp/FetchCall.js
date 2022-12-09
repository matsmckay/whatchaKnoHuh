import { useEffect, useState } from "react";
import axios from "axios";


const FetchCall = () => {

    const [homoWords, setHomoWords] = useState([]);

    useEffect(() => {

        axios({
          url: `https://api.datamuse.com/words`,
          method: "GET",
          dataResponse: "json",
          params: {
            rel_hom: "course",
            md: "d"
          },
        }).then((response) => {
          const similarSound = response.data; 
          setHomoWords(similarSound);

          
        });
        
    }
    ,[])
    
    console.log(homoWords);
    return (
        <div>
            <h2>Issa Test Yoo Reelaxxx</h2>

        {
            homoWords.map((word) => {
                return (
                    <div>
                        <h3 key= {word.score}> Word: {word.word} </h3>
                        <p> Def: { word.defs} </p>
                    </div>
                )
            })
        }
           

        </div>
    )
}

export default FetchCall;