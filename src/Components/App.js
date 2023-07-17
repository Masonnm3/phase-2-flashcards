import React , {useEffect , useState} from 'react'
import Sidebar  from './SideBar';
import "../App.css"
import { initialDecks } from './initialData/initialDecks';



function App() {
  const [userDecks, setUserDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState({});

  useEffect(() => {
    Fetchdecks();
  
  }, [])

   const  Fetchdecks = async () => {
     try {
      const response = await fetch('http://localhost:3000/Decks');
      const data =await response.json();
      setUserDecks(initialDecks);
     }
     catch(error) {
      console.log("error fetching decks" + error)
     }
}
//creates a new deck and adds it to the user deck list state: userDecks
const createNewDeck = () => {
  const newDeck = {
    id: userDecks.length,
    data: { name: "Click title area to name your new deck" },
    content: [],
  };
  setUserDecks([...userDecks, newDeck]);
};

const addCard = () => {
  const newCard = { front: "Front Side", back: "Back Side" };
  const newCardList = [...selectedDeck.content, newCard];
  const index = selectedDeck.id;

  const updatedDeckData = {
    id: index,
    data: selectedDeck.data,
    content: newCardList,
  };

  setSelectedDeck(updatedDeckData);

  const newDecks = [...userDecks];

  newDecks
    .filter((deck) => deck.id !== selectedDeck.id)
    .splice(index, 1, updatedDeckData);

  setUserDecks(newDecks);
};
 



   return (
    <div className="App">
    <Sidebar
    userDecks={userDecks}
    setUserDecks={setUserDecks}
    createNewDeck={createNewDeck}
    addCard={addCard}
    
    />
  </div>
  );
}

export default App;
