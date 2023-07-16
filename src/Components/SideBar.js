import React from 'react'
import "../App.css"
import NewDeck from './NewDeck'

function SideBar() {
  return (
    <header> 
    <div className="Sidebar" > 
        <div class="container">
                < div class ="nav">
                    <h1> Decks </h1>
                    < NewDeck />
                    
                </div>

        </div>
       

    </div>
    </header>

  )
}

export default SideBar