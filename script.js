
function getComputerChoice() {
    const  array = ["Rock", "Paper", "Scissors"];
    return array[Math.floor(Math.random() * array.length)];
}

function playRound(computerChoice) {
    if (playerSelection == "Rock"){
        if (computerChoice == "Rock") {
            ties++;
            return "Tie... Computer = "+computerWins+"; Player Wins = "+playerWins+"; "+"Ties ="+ties+".";
        }
        else if (computerChoice == "Paper") {
            computerWins++;
            return "Computer Wins! ... Computer = "+computerWins+"; Player Wins = "+playerWins+"; "+"Ties ="+ties+".";

        } else {
            playerWins++;
            return "Computer Wins! ... Computer = "+computerWins+"; Player Wins = "+playerWins+"; "+"Ties ="+ties+".";
        }
    } else if (playerSelection == "Paper"){
        if (computerChoice == "Rock") {
            playerWins++;
            return "Computer Wins! ... Computer = "+computerWins+"; Player Wins = "+playerWins+"; "+"Ties ="+ties+"."; 
        }
        else if (computerChoice == "Paper") {
            ties++;
            return "Tie... Computer = "+computerWins+"; Player Wins = "+playerWins+"; "+"Ties ="+ties+".";
            
        } else {
            computerWins++;
            return "Computer Wins! ... Computer = "+computerWins+"; Player Wins = "+playerWins+"; "+"Ties ="+ties+".";

        }
    } else {//playerSelection = scissors
        if (computerChoice == "Rock") {
            computerWins++;
            return "Computer Wins! ... Computer = "+computerWins+"; Player Wins = "+playerWins+"; "+"Ties ="+ties+".";
        }
        else if (computerChoice == "Paper") {
            playerWins++;
            return "Computer Wins! ... Computer = "+computerWins+"; Player Wins = "+playerWins+"; "+"Ties ="+ties+"."; 
        } else {
            ties++;
            return "Tie... Computer = "+computerWins+"; Player Wins = "+playerWins+"; "+"Ties ="+ties+".";
        }
    } 
}
