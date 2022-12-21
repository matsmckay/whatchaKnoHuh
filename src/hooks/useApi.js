import axios from "axios";
import { useEffect, useState } from "react";


const useApi = () => {
        
        const [transferWord, setTransferWord] = useState([])
        const [homoWords, setHomoWords] = useState([]);

        useEffect (() => {
               const homoList = ['ail', 'ale', 'airs',  'heirs', 'aisle', 'ascent', 'assent', 'aural', 'oral', 'auricle',  'oracle', 'berth' , 'birth', 'boy' , 'buoy', 'cached' , 'cashed', 'Carrot', 'karat', 'cede', 'censor',  'sensor', 'chased',  'chaste', 'choirs' ,'quires','chords' , 'cords', 'chute' , 'shoot' , 'coax' , 'cokes', 'cocks' ,'cox', 'coffer' , 'cougher', 'Colonel' ,  'kernel', 'cops' , 'copse','core' , 'corps','cygnet' , 'signet','symbol','dew' , 'due', 'done' , 'dun','draft' , 'draught', 'earns' , 'urns', 'ewes' , 'use','eyelet' , 'islet', 'gnu' , 'knew', 'halls' , 'hauls','heed','hertz' , 'hurts','him' , 'hymn','hoarse' , 'horse','holy' , 'wholly', 'instance' , 'instants','intense' , 'intents','jewels' , 'joules','key', ' quay','knap' , 'nap','knead','need','knit' , 'nit','knob' , 'nob','lichens' , 'likens','licker' , 'liquor','lieu' , 'loo','links' , 'lynx','loon' , 'lune','marshal',  'martial','medal', 'meddle','metal' , 'mettle','oohs' , 'ooze', 'racks' , 'wracks', 'rapt' , 'wrapped', 'recede' , 'reseed', 'receipt' , 'reseat','reek' , 'wreak','reign' , 'rein','rest' , 'wrest','review' , 'revue','rex' , 'wrecks','ring' , 'wring','rite' , 'wright','rote' , 'wrote','rude' , 'rued', 'rye' , 'wry','taught' , 'taut','tear' , 'tier','vail' , 'veil','vain' , 'vein','variance' , 'variants','vial' , 'vile','wade' , 'weighed','watts' , 'wright' , 'write' 
                ]
                
                let word =  homoList[Math.floor(Math.random()*homoList.length)] 

                let randomWord = word
    
                console.log(randomWord);
            
                const runIt = () => { axios({
                    url: `https://api.datamuse.com/words`,
                    method: "GET",
                    dataResponse: "json",
                    params: {
                        rel_hom: 'course',
                        max: 2,
                    }
                }).then((response) => {
                    //NEXT STEP : ADD error handling for when only one word is returned - have the api run again until two words are returned
                    const similarSound = response.data; 
                    setHomoWords(similarSound)
                    console.log(homoWords)
                })
        }  
        if (homoWords.length === 1 || homoWords.length === 0) {
            runIt()
        } else {
                setTransferWord(homoWords)
        }
                console.log(homoWords);     
        }, [])
        return transferWord
}

        
        // const [apiCall, setApiCall] = useState(null)   
// }

export default useApi