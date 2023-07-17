import React from 'react'
import "./sidebar.css"
import Deck from './Decks'

import { HiPlusCircle, HiStop } from "react-icons/hi";
import IconBar from '../containers/iconBar';

function SideBar({
  userDecks,
  createNewDeck,
  removeDeck,
  addQuestionsView,
  setAddQuestionsView,
  selectedDeck,
  setSelectedDeck,
  setUserDecks,
  addCard,
  cardSide,
  setCardSide,
  deleteCard,
  updateCard,
 

}) {
  return (
    <header> 
    <div className="sidebar">
      <div className='sidebar-header'>
       < IconBar/>
      </div>
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

   
    </header>

  )
}

export default SideBar