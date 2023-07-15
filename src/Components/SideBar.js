import React from 'react'
import "../App.css"

function SideBar() {
  return (
    <header> 
    <div className="Sidebar" > 
        <div class="container">
                < div class ="nav">
                    <h1> Decks </h1>
                    <button onClick='showCreateCard'> New Deck </button>
                    <button onClick='delFlashCard'> Del Deck </button>
                </div>

        </div>
       

    </div>
    </header>

  )
}

export default SideBar