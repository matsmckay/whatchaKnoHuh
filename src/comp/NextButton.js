
const NextButton = ({triggerReRender, setTriggerReRender}) => {

     const handleClick = () => {
        setTriggerReRender(!triggerReRender)
    } 

  return(
    <button onClick={handleClick}>next</button>
  )
}

export default NextButton;