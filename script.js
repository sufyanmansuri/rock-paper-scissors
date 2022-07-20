const options = ["rock", "paper", "scissors"];
let score = {
  player: 0,
  computer: 0,
};
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", play));

function getEmoji(text) {
  let emoji = "";
  switch (text) {
    case "rock":
      emoji = "✊";
      break;
    case "paper":
      emoji = "✋";
      break;
    case "scissors":
      emoji = "✌";
      break;
  }
  return emoji;
}
function checkWinner() {
  const scoreDiv = document.querySelector(".score");
  if (score.player == 5) {
    // Change favicon if player wins
    const favicon = document.querySelector("link[rel=icon]");
    favicon.setAttribute(
      "href",
      `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎉</text></svg>`
    );

    // Change title
    const title = document.querySelector("title");
    title.textContent = "You Won! ❤";
    scoreDiv.textContent = `Congratulations🎉! You won the match by ${score.player} - ${score.computer}.`;
    score.player = 0;
    score.computer = 0;
  } else if (score.computer == 5) {
    scoreDiv.textContent = `Sorry🤎! You lost the match by ${score.player} - ${score.computer}.`;
    score.player = 0;
    score.computer = 0;
  }
}

function play(e) {
  playerSelection = e.target.getAttribute("data-selection");
  computerSelection = computerPlay();
  computerSelectionEmoji = getEmoji(computerSelection);
  playerSelectionEmoji = getEmoji(playerSelection);

  // Change title back to "Rock Paper Scissors"
  const title = document.querySelector("title");
  if (title != "Rock Paper Scissors") title.textContent = "Rock Paper Scissors";

  // Change favicon based on player input
  const favicon = document.querySelector("link[rel=icon]");
  favicon.setAttribute(
    "href",
    `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${playerSelectionEmoji}</text></svg>`
  );

  // Calculate and display game result
  const selectionDiv = document.querySelector(".selection");
  selectionDiv.textContent = `You: ${playerSelectionEmoji} Computer: ${computerSelectionEmoji}`;
  winner = playRound(playerSelection, computerSelection);
  const result = document.querySelector(".result");
  if (winner == "player") {
    score.player++;
    result.textContent = "You Won this round!";
  } else if (winner == "computer") {
    score.computer++;
    result.textContent = "You lost this round.";
  } else if (winner == "tie") {
    result.textContent = "This round resulted in a tie.";
  }
  // Update Score
  const scoreDiv = document.querySelector(".score");
  scoreDiv.textContent = `${score.player} - ${score.computer}`;
  checkWinner();
}
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

// function game() {
//   let playerScore = 0,
//     computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = playerInput(),
//       computerSelection = computerPlay(),
//       roundResult = playRound(playerSelection, computerSelection);
//     if (roundResult == "player") {
//       console.log(
//         `You Win! ${playerSelection
//           .charAt(0)
//           .toUpperCase()
//           .concat(playerSelection.slice(1))} beats ${computerSelection
//           .charAt(0)
//           .toUpperCase()
//           .concat(computerSelection.slice(1))}`
//       );
//       playerScore++;
//     } else if (roundResult == "computer") {
//       console.log(
//         `You Lose! ${computerSelection
//           .charAt(0)
//           .toUpperCase()
//           .concat(computerSelection.slice(1))} beats ${playerSelection
//           .charAt(0)
//           .toUpperCase()
//           .concat(playerSelection.slice(1))}`
//       );
//       computerScore++;
//     } else if (roundResult == "tie") {
//       console.log(`Tie`);
//     }
//     console.log(`Score - You: ${playerScore} Computer: ${computerScore}`);
//   }
//   if (playerScore > computerScore) {
//     console.log(
//       `Congratulations! You won the match by ${playerScore}-${computerScore}.`
//     );
//   } else if (playerScore < computerScore) {
//     console.log(
//       `Sorry! You lost the match by ${playerScore}-${computerScore}.`
//     );
//   } else {
//     console.log(`It's a tie! You: ${playerScore} Computer: ${computerScore}.`);
//   }
// }
