
const content = document.querySelector("#container")
const item = document.createElement("p")
const para = document.createElement("p")
const result = document.createElement("p")
content.appendChild(item)
content.appendChild(para)

content.appendChild(result)

let computerScore = 0
let humanScore = 0



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


document.addEventListener("DOMContentLoaded", () =>{
    const rock = document.querySelector("#rock")

    rock.addEventListener("click", () =>{
        function playGame(){
          
          
          function playRound(humanChoice,computerChoice){
            if(humanChoice == "rock" && computerChoice == "rock"){
                item.textContent = "It is a tie!"}
            else if(humanChoice == "rock" && computerChoice =="paper"){
                item.textContent = `You have lost! ` + `Computer Score: ${++computerScore}`
            }
            else if(humanChoice == "rock" && computerChoice =="scissors"){
                item.textContent = `You win! ` + `Human Score: ${++humanScore}`
            }
            else if(humanChoice == "paper" && computerChoice =="paper"){
                item.textContent = "It is a tie!"
            }
            else if(humanChoice == "paper" && computerChoice =="rock"){
                item.textContent = `You win! ` + `Human Score: ${++humanScore}`
            }
            else if(humanChoice == "paper" && computerChoice =="scissors"){
                item.textContent = `You have lost! ` + `Computer Score: ${++computerScore}`
            }
            else if(humanChoice == "scissors" && computerChoice =="paper"){
                item.textContent = `You win! ` + `Human Score: ${humanScore++}`
            }
            else if(humanChoice == "scissors" && computerChoice =="rock"){
                item.textContent = `You have lost! ` + `Computer Score: ${++computerScore}`
            }
            else if(humanChoice == "scissors" && computerChoice =="scissors"){
                item.textContent = "It is a tie!"
            }
            
          }
    
         let HumanSelection = "rock"
         let computerSelection = getComputerChoice()
         playRound(HumanSelection,computerSelection)
         para.textContent = "The score is:\n Computer: " + computerScore + "\n Player: " + humanScore;
                
         return para.textContent = "The final score is:\n Computer: " + computerScore + "\n Player: " + humanScore;
        }
        if(computerScore === 5){
            result.textContent = "The computer has won Rock, Paper, Scissors"
         } 
        else if (humanScore === 5){
            result.textContent = "You have won Rock, Paper, Scissors"
         }

      playGame()

    })

})

document.addEventListener("DOMContentLoaded", () =>{
    const paper = document.querySelector("#paper")

    paper.addEventListener("click", () =>{
        function playGame(){
          
    
          function playRound(humanChoice,computerChoice){
            if(humanChoice == "rock" && computerChoice == "rock"){
                item.textContent = "It is a tie!"}
            else if(humanChoice == "rock" && computerChoice =="paper"){
                item.textContent = `You have lost! ` + `Computer Score: ${++computerScore}`
            }
            else if(humanChoice == "rock" && computerChoice =="scissors"){
                item.textContent = `You win! ` + `Human Score: ${++humanScore}`
            }
            else if(humanChoice == "paper" && computerChoice =="paper"){
                item.textContent = "It is a tie!"
            }
            else if(humanChoice == "paper" && computerChoice =="rock"){
                item.textContent = `You win! ` + `Human Score: ${++humanScore}`
            }
            else if(humanChoice == "paper" && computerChoice =="scissors"){
                item.textContent = `You have lost! ` + `Computer Score: ${++computerScore}`
            }
            else if(humanChoice == "scissors" && computerChoice =="paper"){
                item.textContent = `You win! ` + `Human Score: ${++humanScore}`
            }
            else if(humanChoice == "scissors" && computerChoice =="rock"){
                item.textContent = `You have lost! ` + `Computer Score: ${++computerScore}`
            }
            else if(humanChoice == "scissors" && computerChoice =="scissors"){
                item.textContent = "It is a tie!"
            }
            
          }
    
         let HumanSelection = "paper"
         let computerSelection = getComputerChoice()
         playRound(HumanSelection,computerSelection)
         para.textContent = "The score is:\n Computer: " + computerScore + "\n Player: " + humanScore;
                
         return para.textContent = "The final score is:\n Computer: " + computerScore + "\n Player: " + humanScore;
        }

        if(computerScore == 5){
            result.textContent = "The computer has won Rock, Paper, Scissors"
         }
        else if (humanScore == 5){
            result.textContent = "You have won Rock, Paper, Scissors"
         }

      playGame()

    })

})

document.addEventListener("DOMContentLoaded", () =>{
    const scissors = document.querySelector("#scissors")

    scissors.addEventListener("click", () =>{
        function playGame(){
          
    
          function playRound(humanChoice,computerChoice){
            if(humanChoice == "rock" && computerChoice == "rock"){
                item.textContent = "It is a tie!"}
            else if(humanChoice == "rock" && computerChoice =="paper"){
                item.textContent = `You have lost! ` + `Computer Score: ${++computerScore}`
            }
            else if(humanChoice == "rock" && computerChoice =="scissors"){
                item.textContent = `You win! ` + `Human Score: ${++humanScore}`
            }
            else if(humanChoice == "paper" && computerChoice =="paper"){
                item.textContent = "It is a tie!"
            }
            else if(humanChoice == "paper" && computerChoice =="rock"){
                item.textContent = `You win! ` + `Human Score: ${++humanScore}`
            }
            else if(humanChoice == "paper" && computerChoice =="scissors"){
                item.textContent = `You have lost! ` + `Computer Score: ${++computerScore}`
            }
            else if(humanChoice == "scissors" && computerChoice =="paper"){
                item.textContent = `You win! ` + `Human Score: ${++humanScore}`
            }
            else if(humanChoice == "scissors" && computerChoice =="rock"){
                item.textContent = `You have lost! ` + `Computer Score: ${++computerScore}`
            }
            else if(humanChoice == "scissors" && computerChoice =="scissors"){
                item.textContent = "It is a tie!"
            }
            
          }
    
         let HumanSelection = "scissors"
         let computerSelection = getComputerChoice()
         playRound(HumanSelection,computerSelection)
         para.textContent = "The score is:\n Computer: " + computerScore + "\n Player: " + humanScore;
                
         return para.textContent = "The final score is:\n Computer: " + computerScore + "\n Player: " + humanScore;
        }

        if(computerScore === 5){
            result.textContent = "The computer has won Rock, Paper, Scissors"
         }
        else if (humanScore === 5){
            result.textContent = "You have won Rock, Paper, Scissors"
         }

      playGame()

    })

})



