import React from 'react'
import "../App.css"
import Deck from './Decks'

function SideBar({decks}) {
  return (
    <header> 
    <div className="Sidebar" > 
        <div className="container">
                < div className ="nav">
                    <h1> Decks </h1>
                     {decks.map((deck) => (
                      
                      <Deck key = {deck.name} deck={deck} />,
                      <Card/>
                     ))}
                    
                </div>

        </div>
       

    </div>
    </header>

  )
}

export default SideBar