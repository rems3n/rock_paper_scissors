
function getComputerChoice() {
    const  array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * array.length)];
}

const game_options = [ //[Player:Computer, Player Result]
    ["rock,rock", "Tie"],
    ["rock,scissors", "Win"],
    ["rock,paper", "Lose"],
    ["scissors,scissors", "Tie"],
    ["scissors,paper", "Win"],
    ["scissors,rock", "Lose"],
    ["paper,paper", "Tie"],
    ["paper,rock", "Win"],
    ["paper,scissors", "Lose"]
]

function playRound(computerChoice, playerChoice) {
    let concat = computerChoice+","+playerChoice.toLowerCase();
    for (i = 0; i < game_options.length; i++){
        if(game_options[i][0]==concat){
            i === 0 || i === 3 || i === 6 ? ties++ : null;
            i === 1 || i === 4 || i === 7 ? playerWins++ : null;
            i === 2 || i === 5 || i === 8 ? computerWins++ : null;           
            return "Player: "+playerChoice+" | Computer: "+computerChoice+"... Player Result: "+game_options[i][1]+"... score:"+playerWins+":"+computerWins+":"+ties;
        }
    }
}

function game() {
    let playerChoice = prompt("First Choice:").toLowerCase();

    while (playerWins < 3 && computerWins < 3){
        let computerChoice = getComputerChoice();
        let result = playRound(computerChoice,playerChoice);
        console.log(result);
        console.log("pvar = "+playerWins+" | cvar = "+computerWins)
        if (playerWins == 3 || computerWins == 3) {break;}
        playerChoice = prompt("Choose again").toLowerCase();
    }
    if (computerWins>playerWins){
        return "Computer wins! "+computerWins+" wins to "+playerWins;
    } else {
        return "Player wins! "+playerWins+" wins to "+computerWins;
    }

}
