// [] = arrays
// {} = objects

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



// Document is the bridge between the JS file and the html file

const whiteBtn = document.getElementById("white-btn") // Assigning a var in the JS file that is a reference to the white-btn var in the html file
const blackBtn = document.getElementById("black-btn") // Assigning a var in the JS file that is a reference to the black-btn var in the html file
const display = document.getElementById("opening-display") // Assigning a var in the JS file that is a reference to the opening-display var in the html file

function showOpening(color) { // Start of the function showOpening that takes color as a parameter
    const openingHTML = openings[color].map(x => `
        <div>
            <h2>${x.name}</h2>
            <p>${x.description}</p>
            <h3>Moves</h3>
            <ul>
                ${x.moves.map(move => `<li>${move}</li>`).join("")}
            </ul>
            <h3>Ideas</h3>
            <ul>
                ${x.ideas.map(idea => `<li>${idea}</li>`).join("")}
            </ul>
        </div>
        `).join("")

    display.innerHTML = openingHTML
}
    
// creating a var called openingHTML that is equal to the start of a for loop that takes the parameter passed in show opening and does...
// Start of a container/ Q: Why is the container needed? A: The container is need in order to seperate the two openings, without it both openings would be in one string
// Takes the name of the opening and displays it as h2
// Takes the description of the opening and displays it as regular text
// Displays "Moves" as h3
// Start of a list
// For every move, display the move and join the entire array of strings into one string. Q: How does the code know where to break up the string so that the moves are displayed properly? A: The code doesnt know, the browser does. Since I am using an Li tag, this tells the browser to list each of the items in one line
// End of the list
// Print out Ideas in h3
// Start of a unnumbered list (bulleted)
// For every idea, display the idea and join the entire aarry of strings into one string
// End of list
// End of container
// Join everything that was provided above into one string
// File the box created in the html file with everything above



whiteBtn.addEventListener("click", function(){ // Create an event that happens at the click the white button. Q: What is the function()? A: Its just a function with no name that is fefined inline
    showOpening("white") // When the button is clicked, call the showOpening function and pass in the parameter "white"
}) // End of function

blackBtn.addEventListener("click", function(){ // Same thing as mentioned before.
    showOpening("black")
})