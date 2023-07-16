import React , {useEffect , useState} from 'react'
import Sidebar  from './SideBar';
import "../App.css"



function App() {
   
  const [decks, setDecks] = useState([])

  useEffect(() => {
    Fetchdecks();
  
  }, [])

   const  Fetchdecks = async () => {
     try {
      const response = await fetch('http://localhost:3000/Decks');
      const data =await response.json();
      setDecks(data);
     }
     catch(error) {
      console.log("error fetching decks" + error)
     }


   }
 



   return (
    <div className="App">
    <Sidebar
    decks={decks}/>
  </div>
  );
}

export default App;
