// [] = arrays
// {} = objects

const openings = {
    white: [
        {
        name: "London System",
        moves: ["1. d4", "2. Nf3", "3. Bf4"],
        description: "A solid, flexible opening for White. Low theory, hard to refute, works against almost anything Black plays",
        ideas: ["Control the center with d4", "Develop your pieces in a fundamental fashion"]
        }
],
    black: [
        {
        name: "King's Indian Defense",
        moves: ["1...Nf6", "2...g6", "3...Bg7", "4...d6", "5...0-0"],
        description: "An aggressive, counterattacking opening for Black. You let White build a center then attack it",
        ideas: ["Get the king to safety quickly by castling early", "Fianchetto the black squared bishop to enable a strong diagonal line of sight"]
    },
    {
        name: "Sicilian Defense",
        moves: ["..."],
        description: "...",
        ideas: ["..."]
    }
]
}

const whiteBtn = document.getElementById("white-btn") // Document is the bridge between the JS file and the html file
const blackBtn = document.getElementById("black-btn")
const display = document.getElementById("opening-display")

function showOpening(color) {
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
    
    // idea is the name you give each item as you loop, thing about it like for(int i = 0;)
    // <li></li> is the list item tag, works only with <ul></ul> or <ol></ol>, this makes it so that the browser adds the bullet points or numbers automatically
    // Because map() returns an array of strings, and innerHTML needs a string, you .join("") so that you give the innerHTML a string. The "" means no seperator between the items.


whiteBtn.addEventListener("click", function(){
    showOpening("white")
})

blackBtn.addEventListener("click", function(){
    showOpening("black")
})