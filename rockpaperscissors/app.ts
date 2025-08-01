// vars
var round: number = 1;
var score: number = 0;
var started: boolean = false;
var newRound: boolean = true;


// generate random string for computer choice
function genComputerChoice(): string{
    const choices: string[] = ["rock", "paper", "scissors"];
    const randomIndex: number = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

// Given a string, update computer choice div
function updateComputerChoice(computerChoice: string): void{
    const computerChoiceDiv = document.querySelector('.computer_choice');
    if (computerChoiceDiv){
        computerChoiceDiv.textContent = computerChoice;
    }
}

// compare choices
function compareChoices(computerChoice: string, playerChoice: string): boolean{
    let playerWin: boolean = true;
    let combined = `${playerChoice}-${computerChoice}`;

    if (combined === "scissors-rock" || combined === "paper-scissors" || combined === "rock-paper"){
        playerWin = false;
    }

    return playerWin;
}

// update round div text
function updateRound(): void{
    const roundDiv = document.querySelector('.round_counter');
    round += 1;
    if (roundDiv){
        roundDiv.textContent = "Round: " + round;
    }

}

// update score div text
function updateScore(): void{
    const scoreDiv = document.querySelector('.score_counter');
    score += 1;
    if (scoreDiv){
        scoreDiv.textContent = "Score: " + score;
    }
}

// start new round
function startNewRound(): void{
    // set computer choice to ???
    updateComputerChoice('???');
    // update round
    updateRound();
    newRound = true;
}


// all buttons (reveal next round button)
const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('click', () => { 
        console.log("Pressed " + started);
        if(!started){
            const newRoundContainer = document.querySelector('.next_round_container') as HTMLElement;
            if(newRoundContainer){
                newRoundContainer.style.display = '';
            }
        started = true;
        }
    });
});

// player choice buttons
const playerChoiceContainer = document.querySelector('.player_choice_container');

if(playerChoiceContainer){
    const playerButtons = playerChoiceContainer.querySelectorAll('button');
    if(playerButtons){
        console.log("new round 1: " + newRound);

        playerButtons.forEach((button) => {
            console.log(button);
            button.addEventListener('click', () => {
                if (newRound){
                    // generate computer choice
                    let computerChoice: string = genComputerChoice();
                    // update computer choice
                    updateComputerChoice(computerChoice);
                    // compare
                    let playerChoice: string = button.innerText.toLowerCase();
                    console.log("Player choice: " + playerChoice)
                    let playerWin: boolean = compareChoices(computerChoice, playerChoice);

                    // update score
                    if (playerWin){
                        updateScore();
                    }

                    newRound = false;
                }
            });
        });
    }   
}


// next round button
const nextRoundButton = document.querySelector('.next_round_button');
if (nextRoundButton) {
    nextRoundButton.addEventListener('click', () =>{
        startNewRound();
    });
}