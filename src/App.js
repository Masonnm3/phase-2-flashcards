import { useState, useEffect } from "react";
import SideBar from "./containers/SideBar";
import { initialDecks } from "./InitinalData/InitialDecks";
import "./App.css";

function App() {
  const [userDecks, setUserDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState({});
  const [addQuestionsView, setAddQuestionsView] = useState(false);
  const [cardSide, setCardSide] = useState("front");
 

  // retrieves persisted decks through local storage
 useEffect(() => {
    fetchdecks();
 } , [])

 const fetchdecks = async () =>  {
    try{
        const response = await fetch ("http://localhost:3000/Decks");
        const data = await response.json();
        setUserDecks(initialDecks);
    }
        catch(error){
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

  // Creates a new card, and adds it to the selected deck
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

  // Removes the selected card from the selected deck
  const deleteCard = (currentCard) => {
    const filteredCardList = selectedDeck.content.filter(
      (card) => card.front !== currentCard.front
    );
    userDecks.filter((deck) => deck.id !== selectedDeck.id);

    const newSelectedDeck = {
      id: selectedDeck.id,
      data: selectedDeck.data,
      content: filteredCardList,
    };
    setSelectedDeck(newSelectedDeck);

    const newDecks = [...userDecks];
    newDecks.splice(selectedDeck.id, 1, newSelectedDeck);

    setUserDecks(newDecks);
  };

  //Updates the selected card to user inputs
  const updateCard = (index, front, back) => {
    const newCardData = { front: front, back: back };

    const cardList = [...selectedDeck.content];
    cardList.splice(index, 1, newCardData);

    const newSelectedDeckData = {
      id: selectedDeck.id,
      data: selectedDeck.data,
      content: cardList,
    };
    setSelectedDeck(newSelectedDeckData);

    const newDecks = [...userDecks];

    newDecks.splice(selectedDeck.id, 1, newSelectedDeckData);

    setUserDecks(newDecks);
  };

  // Removes the selected deck from deck list state: userDecks
  const removeDeck = (deck) => {
    const updatedDeckList = [...userDecks];
    updatedDeckList.splice(deck.id, 1);
    setUserDecks(updatedDeckList);
  };

  return (
    <div className="App">
      <SideBar
        userDecks={userDecks}
        setUserDecks={setUserDecks}
        removeDeck={removeDeck}
        createNewDeck={createNewDeck}
        addQuestionsView={addQuestionsView}
        setAddQuestionsView={setAddQuestionsView}
        selectedDeck={selectedDeck}
        setSelectedDeck={setSelectedDeck}
        addCard={addCard}
        cardSide={cardSide}
        setCardSide={setCardSide}
        deleteCard={deleteCard}
        updateCard={updateCard}
      />
     
    </div>
  );
}

export default App;