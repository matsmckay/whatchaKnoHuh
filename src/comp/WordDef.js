import axios from "axios"
import { useEffect, useState } from "react"


const WordDef = ({wordDef}) => {

  const [responseDef, setResponseDef] = useState('');

    useEffect(() => {
      let word = wordDef
      console.log(word)
      axios({
          url: `https://api.wordnik.com/v4/word.json/${word}/definitions`,
          method: "GET",
          dataResponse: "json",
          params: {
              word: word,
              limit: 3,
              api_key: '27lonz8iuunssx6o3uadbmcjgcyja363kgwsvbkxoqdada30f'
          }
      }).then((response) => {
          //NEXT STEP : ADD error handling for when only one word is returned - have the api run again until two words are returned
          console.log(response.data)
          // setResponseDef(response.data[0].text)
          let definition = response.data
          definition.filter((def) => {
            console.log(def.text)
            return def.text
          })
          setResponseDef(definition);
          
      })

    },[])

    return(
      <div>
        <p>{responseDef}</p>
      </div>
    )
}
export default WordDef;