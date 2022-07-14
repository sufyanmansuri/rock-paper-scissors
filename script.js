const options = ["rock", "paper", "scissors"];

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function playerInput() {
  let selection = prompt("('Rock', 'Paper', 'Scissors')\nEnter your choice:");
  while (!options.includes(selection.toLowerCase())) {
    selection = prompt(
      "INVALID INPUT!\n('Rock', 'Paper', 'Scissors')\nEnter your choice:"
    );
  }
  return selection;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function game() {
  let playerScore = 0,
    computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerInput(),
      computerSelection = computerPlay(),
      roundResult = playRound(playerSelection, computerSelection);
    if (roundResult == "player") {
      console.log(
        `You Win! ${playerSelection
          .charAt(0)
          .toUpperCase()
          .concat(playerSelection.slice(1))} beats ${computerSelection
          .charAt(0)
          .toUpperCase()
          .concat(computerSelection.slice(1))}`
      );
      playerScore++;
    } else if (roundResult == "computer") {
      console.log(
        `You Lose! ${computerSelection
          .charAt(0)
          .toUpperCase()
          .concat(computerSelection.slice(1))} beats ${playerSelection
          .charAt(0)
          .toUpperCase()
          .concat(playerSelection.slice(1))}`
      );
      computerScore++;
    } else if (roundResult == "tie") {
      console.log(`Tie`);
    }
    console.log(`Score - You: ${playerScore} Computer: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log(
      `Congratulations! You won the match by ${playerScore}-${computerScore}.`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Sorry! You lost the match by ${playerScore}-${computerScore}.`
    );
  } else {
    console.log(`It's a tie! You: ${playerScore} Computer: ${computerScore}.`);
  }
}
