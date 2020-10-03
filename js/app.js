/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * app.js to
 * - create a new instance of the `Game` class
 * - add event listeners for the start button and onscreen keyboard buttons
 */
const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);
var game = new Game();

document.addEventListener('click', function (e) {
  game.startGame();
});
