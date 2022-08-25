function BigGame() {
    var userChoice, computerChoice;
    userChoice = getUserChoice ();
    computerChoice = getComputerChoice();
    
    document.getElementById('outResult').innerHTML= determineWinner(userChoice, computerChoice);
}
    
    function getUserChoice () {
        let userChoice = document.querySelector('input[name="drone"]:checked').id;  
        document.getElementById('outResultUser').innerHTML= 'ResultUser: ' + userChoice;
        return userChoice;
    }

    function getComputerChoice() {
        let computerChoice;
        switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerChoice = "rock";
        break;
        case 1:
            computerChoice = "paper";
        break;
        case 2:
            computerChoice = "scissors";
        }
        document.getElementById('outResultComp').innerHTML='ResultComp: ' + computerChoice;
        return computerChoice;
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice == computerChoice) {
            return "Result: DRAW";
          }     
        else if (userChoice == "rock" && computerChoice == "paper") {
            return 'Result: LOSE';
          }  
        else if (userChoice == "paper" && computerChoice == "rock") {
            return 'Result: WIN';
          }  
        else if (userChoice == "rock" && computerChoice == "scissors") {
            return 'Result: WIN';
          }  
        else if (userChoice == "scissors" && computerChoice == "rock") {
            return 'Result: LOSE';
          }       
        else if (userChoice == "paper" && computerChoice == "scissors") {
                return 'Result: LOSE';
          }  
        else if (userChoice == "scissors" && computerChoice == "paper") {
                return 'Result: WIN';
          } 
    }   