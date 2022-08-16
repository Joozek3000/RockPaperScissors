let playerScore = 0;
let computerScore = 0;

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

// deciding who wins
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a draw!`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return `You Won!, rock beats scissors`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return `you Won!, paper beats rock`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You Won!, scissors beat paper`;
  } else {
    return `You Loose!`;
  }
};

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(computerSelection, playerSelection));
