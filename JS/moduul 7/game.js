//step 1 What en who we need in this game. that is user, computer, result and randompicks
let userChoice;
let computerChoice;
let result;
let ranNum;

const displayResult = document.getElementById('result');
const computerPick = document.getElementById('compChoice');
const userPick = document.getElementById('userChoice');
const resetBtn = document.getElementById('reset');
//added after step 3 so now
const possibleChoices = document.querySelectorAll('.choices');

//step 4 loops
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e => //js knows when its clicked (value e) it will do this loop.
{
  userChoice = e.target.id;
  ranNum = Math.floor(Math.random() * 3) + 1; //random number, multiply 3, 3 stands for the choices, +1 so it mathces the choices 1, 2, 3 in step 3.
  generateCompChoice();
  compareChoices();
  computerPick.innerHTML = '<img src="img/' + computerChoice + '.jpg">';  // print results in computerChoice
  userPick.innerHTML = '<img src="img/' + userChoice + '.jpg">'; // print results in userChoice
  displayResult.innerHTML = result; // print reulsts in result
}));

// step 3 let computer choose a choice
function generateCompChoice()
{
  if(ranNum == 1)
  {
    computerChoice = 'rock';
  }
  else if(ranNum == 2)
  {
    computerChoice = 'paper';
  }
  else if(ranNum == 3)
  {
    computerChoice = 'scissors';
  }
}

//step 5 making the reset button work
function reset(){
  computerChoice = '?';
  computerPick.innerHTML = computerChoice;
  ranNum = 0;
  userChoice = '?';
  userPick.innerHTML = userChoice;
  displayResult.innerHTML = '?';
}

//step 2 how the game works, when user or computer wins
function compareChoices(){
  if(userChoice == computerChoice)
  {
    result = "It's a tie game!";
  }
  else if (userChoice == 'scissors' && computerChoice == 'paper')
  {
    result = "YOU WIN!!!";
  }
   else if (userChoice == 'paper' && computerChoice == 'rock')
  {
    result = "YOU WIN!!!";
  }
   else if (userChoice == 'rock' && computerChoice == 'scissors')
  {
    result = "YOU WIN!!!";
  }
   else if (userChoice == 'rock' && computerChoice == 'paper')
  {
    result = "Computer Wins.";
  }
   else if (userChoice == 'paper' && computerChoice == 'scissors')
  {
    result = "Computer Wins.";
  }
   else if (userChoice == 'scissors' && computerChoice == 'rock')
  {
    result = "Computer Wins.";
  }
}
