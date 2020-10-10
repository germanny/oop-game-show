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
    this.phrases = this.createPhrases(); // An array of Phrase objects to use with the game; initially empty
    this.activePhrase = null; // the Phrase object currently in play; initially null
  }


  /**
   * Add some phrases for the game
   * @return    {array}    An array of phrases
   */
  createPhrases() {
    return [
      'Say hello to my little friend',
      'As you wish',
      'A martini shaken not strirred',
      'To infinity and beyond',
      'Go ahead make my day'
    ];
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const phrases = this.phrases;
    const randomIndex = Math.floor(Math.random() * phrases.length);

    return new Phrase(phrases[randomIndex]);
  }

  /**
 * Begins game by selecting a random phrase and displaying it to user
 */
  startGame() {
    // Hide the start start screen overlay
    document.getElementById('overlay').style.display = "none";

    // get a random phrase
    const phrase = this.getRandomPhrase();
    this.activePhrase = phrase;
    phrase.addPhraseToDisplay();
  }

  /**
   * Checks checks to see if the player has revealed all of the letters in the active phrase.
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const allLetterLis = [...document.querySelectorAll('li.letter')];
    const hasHideClass = el => el.classList.contains('hide');

    if (allLetterLis.some(hasHideClass)) {
      return false;
    }

    return true;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    // take away a heart
    const lifeHeartImgs = [...document.querySelectorAll('li.tries img')];

    // look through all the lifeHeartImgs
    // find the first one with a "images/liveHeart.png" src
    // change it to "images/lostHeart.png"
    // break the loop
    for (const img in lifeHeartImgs) {
      if (lifeHeartImgs[img].src.indexOf('liveHeart') > -1) {
        lifeHeartImgs[img].src = "images/lostHeart.png";
        break;
      }
    }

    // increment missed
    this.missed++;

    // check if we're a loser
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const h1 = document.getElementById('game-over-message');
    const overlay = document.getElementById('overlay');

    // show overlay screen
    overlay.style.display = "flex";

    if (gameWon) {
      h1.textContent = "Congratulations, SmartyPants";
      overlay.classList.remove('lose');
      overlay.classList.add('win');
    } else {
      h1.textContent = "Welp, you need a little more practice";
      overlay.classList.remove('win');
      overlay.classList.add('lose');
    }

    this.resetGame();
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    // Disable the selected letter’s onscreen keyboard button.
    // If the phrase does n​ot​ include the guessed letter, add the`wrong` CSS class to the selected letter's keyboard button and call the `removeLife()` method.
    // If the phrase includes the guessed letter, add the`chosen` CSS class to the selected
    // letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and then call the `checkForWin()` method. If the player has won the game, also call the `gameOver()` method.

    button.disabled = true;
    button.style.cursor = "default";

    if (this.activePhrase.phrase.indexOf(button.textContent) > -1) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(button.textContent);

      const gameWon = this.checkForWin();

      if (gameWon) {
        this.gameOver(gameWon);
      }
    } else {
      button.classList.add('wrong');
      this.removeLife();
    }
  }

  resetGame() {
    // reset misses
    this.missed = 0;

    // reset phrase ul
    document.querySelector('#phrase ul').innerHTML = '';

    // reset hearts
    const lifeHeartImgs = [...document.querySelectorAll('li.tries img')];

    for (const img in lifeHeartImgs) {
      lifeHeartImgs[img].src = "images/liveHeart.png";
    }

    // reset key classes
    const buttonKeys = [...document.querySelectorAll('button.key')];

    for (const button in buttonKeys) {
      buttonKeys[button].style = '';
      buttonKeys[button].disabled = false;
      buttonKeys[button].className = 'key';
    }
  }
}
