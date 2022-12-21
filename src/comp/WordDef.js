import axios from "axios"
import { useEffect, useState } from "react"



const WordDef = ({ wordDef, setWordDef }) => {
  const keyRadojko = 'cb0kpdqhzyzmlou550ldukoadiyayyvp5607r0qnhpxxo85fb'
  // const keyMatt = '27lonz8iuunssx6o3uadbmcjgcyja363kgwsvbkxoqdada30f'

  const [responseDef, setResponseDef] = useState('');
  

  // const yolo = useCallback(()=>{
  //   setTriggerReRender()
  // }, [triggerReRender])

  // To prevent useEffect on page mount
  // const isFirstRender = useRef(true)

  useEffect(() => {

   

    const parseDef = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g; 
    
    // if (isFirstRender.current) {
    //   isFirstRender.current = false
    // }
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
      console.log("this is the first one ", response);
        let arrayOfDefinitions = response.data
        let definition = arrayOfDefinitions.find((defText) => {
        
          return defText.text
        })
    
        let stupidName = definition.text
        console.log({stupidName});
       
        if (stupidName === undefined){
         setWordDef('')
          // yolo()
        }
        else {
          let parseString = stupidName.replace(parseDef, '')
          setResponseDef(parseString)
        }
      })

    }


  }, [wordDef, setWordDef])

  // let parseString = (defText.text).replace(parseDef, '')
  // setResponseDef(parseString);

  // if (defText.text === undefined){
  //   setTriggerReRender(!triggerReRender)
  // }
  // else {
  //   setResponseDef(defText.text)
  // }
  
  return (
    <div>
      <p>{responseDef}</p>
    </div>
  )
}

export default WordDef;