function gameDetails(game, number) {
    const games = game.find(games => games.number === number);
    if (games) {
        return `
        ${games.title} </br> 
        ${games.released} </br>
        ${games.developer} </br>
        ${games.publisher} </br>
        ${games.genre} </br>
        ${formatRating(games)} </br>
        `;
    }
    return `Game details not found.`;
}
function getNumYears(games) {
    return `${new Date().getFullYear() - new Date(games.released).getFullYear()}`
}

function formatRating(games) {
    return `${games.rating}/10`
}

function absoluteBanger(games) {
    switch(games.title){
        case "Doom II":
            return `My dad introduced me to this game as a kid on an old linux laptop. It's my comfort game.`
            break;
        case "Counter Strike: Global Offensive":
            return `I've met some cool people through this game. A lot of weirdos too.`
            break;
        case "Assassin's Creed: Brotherhood":
            return `I play this game a lot with my fiance. It makes me happy.`
            break;
        case "Lost In Vivo":
            return `This game is so well made, and just by a small team. It makes me want to be able to create something just as good.`
            break;
        default:
            return ``
            break;
    }
}

// FETCH and READ Games.json

fetch('Games.json')
    .then(response => response.json())
    .then(game => {
        game.forEach(games => {
            console.log(`${games.title} is a ${games.genre} game, released ${getNumYears(games)} years ago. Devloped by ${games.developer} and published by ${games.publisher}. I give it a ${formatRating(games)}. ${absoluteBanger(games)}`)
            
            gameInfo = `
                <ol>
                    <li>${gameDetails(game, 1)}</li>
                    </br>
                    <li>${gameDetails(game, 2)}</li>
                    </br>
                    <li>${gameDetails(game, 3)}</li>
                    </br>
                    <li>${gameDetails(game, 4)}</li>
                    </br>
                    <li>${gameDetails(game, 5)}</li>
                    </br>
                    <li>${gameDetails(game, 6)}</li>
                    </br>
                    <li>${gameDetails(game, 7)}</li>
                    </br>
                    <li>${gameDetails(game, 8)}</li>
                    </br>
                    <li>${gameDetails(game, 9)}</li>
                    </br>
                    <li>${gameDetails(game, 10)}</li>
                </ol>
            `
            html = gameInfo
            document.body.innerHTML = html

        })
    
    })

