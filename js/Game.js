/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js
 *
 * Create a Game class methods for
 * - starting and ending the game,
 * - handling interactions,
 * - getting a random phrase,
 * - checking for a win,
 * - removing a life from the scoreboard
 */
class Game {
  constructor() {
    this.missed = 0; // Used to track the number of missed guesses by the player, initially 0.
    this.phrases = []; // An array of Phrase objects to use with the game; initially empty
    this.activePhrase = null; // the Phrase object currently in play; initially null
  }
}
