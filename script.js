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
  console.log(playerSelection, computerSelection);
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return `It's a draw!`;
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    return `It's a draw!`;
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return `It's a draw!`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return `You Won!, rock beat paper`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return `You Won! rock beats scissors`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return `You Won! scissors beats paper`;
  } else if (
    (playerSelection === 'paper') &
    (computerSelection === 'scissors')
  ) {
    computerScore++;
    return `You Loose! scissors beats paper`;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return `You Loose! Rock beats Paper`;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return `You Loose! Rock beats scissors`;
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(`You choose`).toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
};
game();

console.log(playerScore, computerScore);
