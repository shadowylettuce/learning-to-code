function OpeningCard({ opening }){
    return (
        <div>
            <h2>{opening.name}</h2>
            <h3>Moves</h3>
            <ul>
                {opening.moves.map((move, index) => (
                        <li key = {index}>{move}</li>
                    ))}
            </ul>
            <h3>Description</h3>
            <p>{opening.description}</p>
            <h3>Ideas</h3>
            <ul>
                {opening.ideas.map((ideas, index) => (
                    <li key = {index}>{ideas}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default OpeningCard