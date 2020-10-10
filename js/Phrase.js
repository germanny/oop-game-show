/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 *
 * Create a Phrase class to handle the creation of phrases
*/
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase(); // the actual phrase the Phrase object is representing, converted to all lower case
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    function letterLi(letter) {
      const classes = ['hide', 'letter', letter];
      const li = document.createElement('li');
      li.classList.add(...classes);
      li.textContent = letter;

      return li;
    }

    function spaceLi() {
      const li = document.createElement('li');
      li.classList.add('space');

      return li;
    }

    const phraseSection = document.getElementById('phrase');
    const phraseSectionUl = phraseSection.querySelector('ul');

    for (let letter of this.phrase) {
      if (letter === ' ') {
        phraseSectionUl.appendChild(spaceLi());
      } else {
        phraseSectionUl.appendChild(letterLi(letter));
      }
    }

    return phraseSectionUl;
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const phraseSection = document.getElementById('phrase');
    const phraseLiWithLetter = phraseSection.getElementsByClassName(letter);

    for (let i = 0; i < phraseLiWithLetter.length; i++) {
      phraseLiWithLetter[i].classList.remove('hide');
      phraseLiWithLetter[i].classList.add('show');
    }
  }
}
