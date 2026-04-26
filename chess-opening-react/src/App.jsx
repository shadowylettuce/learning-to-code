import{ useState } from 'react'
import './App.css'
import OpeningCard from './OpeningCard'

const openings = { // Creating an object called openings
    white: [ // The start of the white opening object, where a list is created
        { // Start of the first objext in the list
        name: "London System", // Name of the first opening
        moves: ["1. d4", "2. Nf3", "3. Bf4"], // Moves of the first opening
        description: "A solid, flexible opening for White. Low theory, hard to refute, works against almost anything Black plays", // Description of the first opening
        ideas: ["Control the center with d4", "Develop your pieces in a fundamental fashion"] // Ideas of the first opening
        } // End of the first object in the white list
], // End of the white list
    black: [ // Start of a new list, this one called black
        { // Start of the first object in the black list
        name: "King's Indian Defense", // Name of the first opening
        moves: ["1...Nf6", "2...g6", "3...Bg7", "4...d6", "5...0-0"], // Moves of the first opening
        description: "An aggressive, counterattacking opening for Black. You let White build a center then attack it", // Description of the first opening
        ideas: ["Get the king to safety quickly by castling early", "Fianchetto the black squared bishop to enable a strong diagonal line of sight"] // Ideas of the first opening
    }, // End of the first opening
    { // Start of the second opening
        name: "Sicilian Defense", // Name of the second opening
        moves: ["1...c5"], // Moves of the second opening
        description: "An agressive opening for black, aiming for immediate counterplay and assymetrical postition ", // Description of the second opening
        ideas: ["Aim to fight for control of the d4 square without the use of e pawn", "Enables black to aggresively counterattack white"] // Ideas of the second opening
    } // End of the second opening
] // end of the black list
} // End of the entire openings object

function App() {
  const [selectedColor, setSelectedColor] = useState(null)
  // useState(null) creates a piece of state with an initial value of null - nothing selected
  // selectedState = selectedColor
  // setSelectedColor is the updater function, call this when you want to change the value, React auto re-renders the page with the new state when called

  return (
    <div>
        <h1>Chess Opening Reference</h1>
        <button id = "white-btn" onClick={()=> setSelectedColor("white")}>Play as White</button>
        <button id = "black-btn" onClick={()=> setSelectedColor("black")}>Play as Black</button>
        {selectedColor && openings[selectedColor].map((opening, index) =>(
            <OpeningCard key = {index} opening = {opening} />
        ))}
    </div>
  )
  // key {index}: react uses key to identify each item in a list so it knows which one is has changed when it re-renders. Sort of like a name tag for every element
}

// The selectedColor && tells react to render null if nothing is done, but to render either black or white (in this case) if they are selected

export default App
