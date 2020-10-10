/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * app.js to
 * - create a new instance of the `Game` class
 * - add event listeners for the start button and onscreen keyboard buttons
 */
var game = new Game();

document.getElementById('btn__reset').addEventListener('click', function () {
  game.startGame();
});

document.getElementById('qwerty').addEventListener('click', function (e) {
  if (e.target.tagName !== "BUTTON") {
    return;
  }

  game.handleInteraction(e.target);
});
