



function getComputerChoice(){
   if(Math.random() < 0.33){
    return "rock"}

    else if(Math.random()>= 0.33 && Math.random() <= 0.66){
        return "scissors"}

    else{
        return "paper"
    }
    
}

function getHumanChoice(){
    let choice = prompt("Please select rock, paper or scissors").toLowerCase();
    if(choice == "rock" || choice =="paper" || choice == "scissors"){
        return choice}
    else{
        return "Please enter a valid option"
    }
}



function playGame(){
    let computerScore = 0
    let humanScore = 0

    function playRound(humanChoice,computerChoice){
        if(humanChoice == "rock" && computerChoice == "rock"){
            console.log("It is a tie!")}
        else if(humanChoice == "rock" && computerChoice =="paper"){
            console.log(`You have lost! ` + `Computer Score: ${computerScore+=1}`)
        }
        else if(humanChoice == "rock" && computerChoice =="scissors"){
            console.log(`You win! ` + `Human Score: ${humanScore+=1}`)
        }
        else if(humanChoice == "paper" && computerChoice =="paper"){
            console.log("It is a tie!")
        }
        else if(humanChoice == "paper" && computerChoice =="rock"){
            console.log(`You win! ` + `Human Score: ${humanScore+=1}`)
        }
        else if(humanChoice == "paper" && computerChoice =="scissors"){
            console.log(`You have lost! ` + `Computer Score: ${computerScore+=1}`)
        }
        else if(humanChoice == "scissors" && computerChoice =="paper"){
            console.log(`You win! ` + `Human Score: ${humanScore+=1}`)
        }
        else if(humanChoice == "scissors" && computerChoice =="rock"){
            console.log(`You have lost! ` + `Computer Score: ${computerScore+=1}`)
        }
        else if(humanChoice == "scissors" && computerChoice =="scissors"){
            console.log("It is a tie!")
        }
        
    }



    for(let i = 0; i<5; i++){
        let HumanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(HumanSelection,computerSelection)
        console.log("The score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
            
        }
        return console.log("The final score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
}

playGame()


