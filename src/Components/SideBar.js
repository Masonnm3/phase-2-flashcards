import React from 'react'
import "../App.css"
import Deck from './Decks'
import { AiFillPlayCircle } from "react-icons/ai";
import { HiPlusCircle, HiStop } from "react-icons/hi";
import IconBar from '../containers/iconBar';

function SideBar({
  userDecks,
  createNewDeck,
  selectedDeck,
  setSelectedDeck,
  setUserDecks,
  addCard,
 

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
              setSelectedDeck={setSelectedDeck}
              userDecks={userDecks}
              setUserDecks={setUserDecks}
             
            />
          ))}

   
    </header>

  )
}

export default SideBar