function guessingGame() {
  const ans = Math.floor(Math.random() * 100);
  let gameOver = false;
  let guessCount = 0;
  return function game(guessedNum) {
    if (gameOver) return "The game is over, you already won!";
    guessCount++;
    if (guessedNum === ans) {
      gameOver = true;
      const guess = guessCount === 1 ? "guess" : "guesses";
      return `You win! You found ${guessedNum} in ${guessCount} ${guess}.`;
    }
    if (guessedNum < ans) return `${guessedNum} is too low!`;
    if (guessedNum > ans) return `${guessedNum} is too high!`;
  };
}

module.exports = { guessingGame };
