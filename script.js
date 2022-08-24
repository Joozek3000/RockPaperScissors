let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');
let result = '';

// Computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
  }
};

function btnDisable() {
  buttons.forEach(el => {
    el.disabled = true;
  });
}

// deciding who wins
const playRound = function (playerSelection) {
  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    result = `It's a draw!\n
       Player Score: ${playerScore}\n 
       Computer Score: ${computerScore}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}\n
      Player Score: ${playerScore}\n
      Computer Score: ${computerScore}`;
    if (playerScore === 5) {
      result = `You won the game!`;
      btnDisable();
    }
  } else if (
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    computerScore++;
    result = `You lost! ${computerSelection} beats ${playerSelection}\n
       Player Score: ${playerScore}\n
       Computer Score: ${computerScore}`;
    if (computerScore === 5) {
      result = `Game Over`;
      btnDisable();
    }
  }
  document.getElementById('result').innerText = result;
  return;
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.value);
  });
});
