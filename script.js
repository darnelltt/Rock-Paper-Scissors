
const content = document.querySelector("#comtainer")
para = document.createElement("p")

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
          let computerScore = 0
          let humanScore = 0
    
          function playRound(humanChoice,computerChoice){
            if(humanChoice == "rock" && computerChoice == "rock"){
                para.textContent = "It is a tie!"}
            else if(humanChoice == "rock" && computerChoice =="paper"){
                para.textContent = `You have lost! ` + `Computer Score: ${computerScore+=1}`
            }
            else if(humanChoice == "rock" && computerChoice =="scissors"){
                para.textContent = `You win! ` + `Human Score: ${humanScore+=1}`
            }
            else if(humanChoice == "paper" && computerChoice =="paper"){
                para.textContent = "It is a tie!"
            }
            else if(humanChoice == "paper" && computerChoice =="rock"){
                para.textContent = `You win! ` + `Human Score: ${humanScore+=1}`
            }
            else if(humanChoice == "paper" && computerChoice =="scissors"){
                para.textContent = `You have lost! ` + `Computer Score: ${computerScore+=1}`
            }
            else if(humanChoice == "scissors" && computerChoice =="paper"){
                para.textContent = `You win! ` + `Human Score: ${humanScore+=1}`
            }
            else if(humanChoice == "scissors" && computerChoice =="rock"){
                para.textContent = `You have lost! ` + `Computer Score: ${computerScore+=1}`
            }
            else if(humanChoice == "scissors" && computerChoice =="scissors"){
                para.textContent = "It is a tie!"
            }
            
          }
    
         let HumanSelection = "rock"
         let computerSelection = getComputerChoice()
         playRound(HumanSelection,computerSelection)
         console.log("The score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
                
         return console.log("The final score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
        }

      playGame()

    })

})

document.addEventListener("DOMContentLoaded", () =>{
    const paper = document.querySelector("#paper")

    paper.addEventListener("click", () =>{
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
    
         let HumanSelection = "paper"
         let computerSelection = getComputerChoice()
         playRound(HumanSelection,computerSelection)
         console.log("The score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
                
         return console.log("The final score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
        }

      playGame()

    })

})

document.addEventListener("DOMContentLoaded", () =>{
    const scissors = document.querySelector("#scissors")

    scissors.addEventListener("click", () =>{
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
    
         let HumanSelection = "scissors"
         let computerSelection = getComputerChoice()
         playRound(HumanSelection,computerSelection)
         console.log("The score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
                
         return console.log("The final score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
        }

      playGame()

    })

})


