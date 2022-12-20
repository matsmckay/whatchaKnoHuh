import axios from "axios"
import { useEffect, useState } from "react"



const WordDef = ({ wordDef }) => {
  const keyRadojko = 'cb0kpdqhzyzmlou550ldukoadiyayyvp5607r0qnhpxxo85fb'
  // const keyMatt = '27lonz8iuunssx6o3uadbmcjgcyja363kgwsvbkxoqdada30f'

  const [responseDef, setResponseDef] = useState('');
  // const [triggerReRender, setTriggerReRender] = useState(false);

  useEffect(() => {
    let word = wordDef
    console.log(word)
    axios({
      url: `https://api.wordnik.com/v4/word.json/${word}/definitions`,
      method: "GET",
      dataResponse: "json",
      params: {
        word: word,
        limit: 10,
        api_key: keyRadojko
      }
    }).then((response) => {
      //NEXT STEP : ADD error handling for when only one word is returned - have the api run again until two words are returned
      console.log(response.data)

      let definition = response.data
      definition.find((defText) => {
        setResponseDef(defText.text);
        // if (defText.text === '') {
        //   setTriggerReRender(!triggerReRender)
        // }else {
        //   return defText.text
        // }
      })

    })


  }, [wordDef])



  return (
    <div>
      <p>{responseDef}</p>
    </div>
  )
}

export default WordDef;