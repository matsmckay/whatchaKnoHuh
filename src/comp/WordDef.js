import axios from "axios"
import { useEffect, useState } from "react"

const WordDef = ({ wordDef, setWordDef }) => {
  const keyRadojko = 'cb0kpdqhzyzmlou550ldukoadiyayyvp5607r0qnhpxxo85fb'
  // const keyMatt = '27lonz8iuunssx6o3uadbmcjgcyja363kgwsvbkxoqdada30f'

  const [responseDef, setResponseDef] = useState('');
  
  useEffect(() => {

    const parseDef = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g; 
    
    if (!wordDef) {
      return
    }
    else {
      let word = wordDef
     
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
        let arrayOfDefinitions = response.data

        let definition = arrayOfDefinitions.find((defText) => {
          return defText.text
        })
    
        let stupidName = definition.text
      
        if (stupidName === undefined){
         setWordDef('')
        }
        else {
          let parseString = stupidName.replace(parseDef, '')
          setResponseDef(parseString)
        }
      })
    }
  }, [wordDef, setWordDef])
  
  return (
    <div>
      <p>{responseDef}</p>
    </div>
  )
}

export default WordDef;

