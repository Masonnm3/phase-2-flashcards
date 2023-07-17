
import { HiPlusCircle, HiStop } from "react-icons/hi";
import Deck from "../components/Deck";
import IconBar from "./IconBar";
import Card from "../components/Card";
import "./SideBar.css";

export default function SideBar({
  userDecks,
  createNewDeck,
  removeDeck,
  addQuestionsView,
  setAddQuestionsView,
  selectedDeck,
  setSelectedDeck,
  setUserDecks,
  addCard,
  setCardSide,
  deleteCard,
  updateCard,
}) {
  return (
    <div>
      {addQuestionsView === false ? (
        <div className="sidebar">
          <div className="sidebar-header">
            <IconBar
            />
            <h1 className="sidebar-title">Flashcards</h1>
            <HiPlusCircle className="add-deck-button" onClick={createNewDeck} />
          </div>
          <div className="separator"></div>
          {userDecks.map((userDeck, i) => (
            <Deck
              key={`deck ${i}`}
              deck={userDeck}
              removeDeck={removeDeck}
              setAddQuestionsView={setAddQuestionsView}
              setSelectedDeck={setSelectedDeck}
              userDecks={userDecks}
              setUserDecks={setUserDecks}
              setCardSide={setCardSide}
            />
          ))}
        </div>
      ) : (
        <div className="sidebar">
          <div className="sidebar-header">
            <IconBar
            />
            <h1 className="sidebar-title">{selectedDeck.data.name}</h1>
            <div className="deck-data">
              <p className="deck-length">{selectedDeck.content.length} cards</p>
              
              <HiPlusCircle className="deck-button" onClick={addCard} />
            </div>
          </div>
          <div className="separator"></div>
          {selectedDeck
            ? selectedDeck.content.map((currentCard, i) => (
                <Card
                  key={i}
                  currentCard={currentCard}
                  cardNumber={i}
                  deleteCard={deleteCard}
                  updateCard={updateCard}
                  setCardSide={setCardSide}
                />
              ))
            : null}
        </div>
      )}
    </div>
  );
}