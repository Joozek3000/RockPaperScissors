Rock, Paper, Scissors Game Documentation

This is a simple Rock, Paper, Scissors game implemented in JavaScript. The game allows two players to play the game (player and the computer) until one of them reaches 5 wins.
Game Logic

The game logic is defined in the JavaScript code and is executed when the user clicks one of the game buttons (rock, paper, or scissors).

<ol>
    <li>First, the getComputerChoice() function is used to randomly generate the computer's choice (rock, paper, or scissors).</li>
    <li>The playRound(playerSelection) function is then called, which takes the player's selection as input and determines the winner of the round.</li>
    <li>The function uses if-else statements to compare the player's choice with the computer's choice and update the player's and computer's scores accordingly.</li>
    <li>The result of each round is displayed in the result element in the HTML.</li>
</ol>
Variables
<ul>
    <li>playerScore: The score of the player, initially set to 0.</li>
    <li>computerScore: The score of the computer, initially set to 0.</li>
    <li>buttons: A reference to all buttons in the HTML, retrieved using the querySelectorAll() function.</li>
    <li>result: A string that holds the result of each round, initially empty.</li>
</ul>
Functions
<ul>
    <li>getComputerChoice(): Returns the computer's choice (rock, paper, or scissors) using a random number generator.</li>
    <li>btnDisable(): Disables all buttons in the HTML to prevent further gameplay.</li>
    <li>playRound(playerSelection): Takes the player's choice as input and determines the winner of the round. The function updates the player's and computer's scores and displays the result in the result element in the HTML.</li>
    <li>addEventListener: Adds an event listener to each button in the HTML, which calls the playRound(playerSelection) function when the button is clicked, passing in the button's value as the player's choice.</li>
</ul>
