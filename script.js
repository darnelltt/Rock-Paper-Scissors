

function getComputerChoice(){
   if(Math.random() < 0.33){
    return "Rock"}

    else if(Math.random()>= 0.33 && Math.random() <= 0.66){
        return "Scissors"}

    else{
        return "Paper"
    }
    
   }

function getHumanChoice(){
    let choice = prompt("Please select rock, paper or scissors");
    if(choice = "Rock" || choice !="Paper" || choice != "Scissors"){
        alert("Please enter a valid option")}
    else{
        return choice
    }
}

console.log(getHumanChoice())
