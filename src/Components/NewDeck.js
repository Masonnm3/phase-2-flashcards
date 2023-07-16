import React , {useState} from 'react'

const  NewDeck = () => {
    const [decks, setDecks] = useState([]);
    

    const addDeck = (deckText) => {
      setDecks([decks , deckText]);
    }

  
  
 

  
  
  
    return (
    <div>
      < button onClick = {() => addDeck( "Deck 1")} > Add Deck 1 </button>
      </div>
      
      

  )
}

export default NewDeck