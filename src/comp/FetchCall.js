import { useEffect, useState } from "react";
import axios from "axios";
import useRandom from "../hooks/useRandom";
import WordDef from "./WordDef";

const FetchCall = () => {


    //state below displays array of homo words to page
    const [displayHomo, setDisplayHomo] = useState([]);

    //stores def of one of the words 
    const [wordDef, setWordDef] = useState('');

    //this state is for the button to trigger rerender 
    const [triggerReRender, setTriggerReRender] = useState(false);
    // const [oneWord, setOneWord] = useState('');



    //this var selects random word from the hook
    let randomWord = useRandom();
    //  console.log(randomWord);

     
     
     useEffect (() => {

        //locking in the random word selected
        let randomResult = randomWord


        axios({
            url: `https://api.datamuse.com/words`,
            method: "GET",
            dataResponse: "json",
            params: {
                rel_hom: randomResult,
                max: 1,
            }
        }).then((response) => {
          
            const similarSound = response.data; 


            //conditional to make sure the data we get back is what we want 
            if (similarSound.numSyllables >= 2 || similarSound.length === 0 ) {
                setTriggerReRender(!triggerReRender)
            }
            else {
                // if the data is good we store it in vars below 
                let apiWord = similarSound[0].word
                let ourWord = randomResult
                
                //put the apiword & ourword in an array 
                let wordOptions = [apiWord, ourWord]
                console.log(wordOptions);

                // *this is for word def comp* select random word from array above
                const wordRandomizer = wordOptions[Math.floor(Math.random() * wordOptions.length)]

                console.log(wordRandomizer);

                //set state to wordOptions array to display 
                setDisplayHomo(wordOptions)
                console.log(displayHomo);
              
            }
        })
    } ,[triggerReRender])


    // console.log(randomWord)
    
    const handleClick = () => {
        setTriggerReRender(!triggerReRender)
    }  
    
        console.log(displayHomo);        
        return (
        <div>
            <h2>Issa Test Yoo Reelaxxx</h2>

            {
                <div>
                    <button>{ displayHomo[0] }</button>
                    <button>{ displayHomo[1] }</button>
                </div>
            }
          
            <button onClick={ handleClick } > next</button>
        </div>
    )
    }

export default FetchCall;

//SI CODE
// Step 1: make a fetch call inside an useEffect to store data on page mount
//Step 2: create logic to pass a randomly generated word into the rel_hom search param
//Step 3: inside the fetch call comp - return a jsx displaying the two random words inside a form as radio bullets - when we choose which word is the correct answer assign “true” value to it. and displays the def of one the words above ( create logic for that )
 
// Step 4: create a custom hook to store user selection with an event handler that compares user input to correct answer
// Step 5: using an if else statement Depending on if userInput is correct or false
    // Step 5a: once a user has made a decision, change the background color of both options to reflect true (green) and false (red)
 
    // Step 6: User can then select to go to the next question using a button that use routing
    // Step 7: After the user has completed 10 questions, display their score and the leaderboard. 
    //     Step 7a: have a text input field where user can enter their name, once submitted using onSubmit, send userInput to new state that then uploads to our firebase database