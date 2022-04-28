const guess = document.getElementById('guess');
const gameNumber = document.getElementById('game-number');
const games = [game1, game2, game3, game4, game5];
const simpleMap = new Map([
  [0, 's'],
  [1, 'i'],
  [2, 'm'],
  [3, 'p'],
  [4, 'l'],
  [5, 'e']
]);
const inputHandler = function(e) {
  games[getGameNumber() - 1]();
}
var CLASS_LETTER_VALID = 'darkgreen';
var validatedLetters = new Set();


function game5() {
 const game5Map = new Map([
    [0, 's'],
    [1, 'i'],
    [2, 'p'],
    [3, 'l'],
    [4, 'e']
  ]);
  game5Map.forEach((value, key) => {
    	letterExistsInGuess('m') && applyStyleToLetter('m', 'darkred');
      !letterExistsInGuess('m') && removeColors('m');
 
    var varLetterIsInSamePositionInGuess = letterIsInSamePositionInGuess(value, key);

    varLetterIsInSamePositionInGuess && validateLetter(value);
    !varLetterIsInSamePositionInGuess && unvalidateLetter(value);
    letterExistsInGuess(value) && !varLetterIsInSamePositionInGuess && missPlacedLetter(value);
    !letterExistsInGuess(value) && removeColors(value);
ess('m'))
    isAllLettersValidated(game5Map) && !letterExistsInGuess('m') && nextGame();
  })
}

function game1() {
  simpleMap.forEach((value, key) => {
    var varLetterIsInSamePositionInGuess = letterIsInSamePositionInGuess(value, key);

    varLetterIsInSamePositionInGuess && validateLetter(value);
    !varLetterIsInSamePositionInGuess && unvalidateLetter(value);
    letterExistsInGuess(value) && !varLetterIsInSamePositionInGuess && missPlacedLetter(value);
    !letterExistsInGuess(value) && removeColors(value);

    isAllLettersValidated(simpleMap) && nextGame();
  })
}

function game2() {
  const game2Map = new Map([
    [0, 'e'],
    [1, 'l'],
    [2, 'p'],
    [3, 'm'],
    [4, 'i'],
    [5, 's']
  ]);
  game2Map.forEach((value, key) => {
    var varLetterIsInSamePositionInGuess = letterIsInSamePositionInGuess(value, key);

    varLetterIsInSamePositionInGuess && validateLetter(value);
    !varLetterIsInSamePositionInGuess && unvalidateLetter(value);
    letterExistsInGuess(value) && !varLetterIsInSamePositionInGuess && missPlacedLetter(value);
    !letterExistsInGuess(value) && removeColors(value);

    isAllLettersValidated(game2Map) && nextGame();
  })
}

function game3() {
  const game3Map = new Map([
    [0, 'm'],
    [1, 'i'],
    [2, 's'],
    [3, 'p'],
    [4, 'e'],
    [5, 'l']
  ]);
  game3Map.forEach((value, key) => {
    var varLetterIsInSamePositionInGuess = letterIsInSamePositionInGuess(value, key);

    varLetterIsInSamePositionInGuess && validateLetter(value);
    !varLetterIsInSamePositionInGuess && unvalidateLetter(value);
    letterExistsInGuess(value) && !varLetterIsInSamePositionInGuess && missPlacedLetter(value);
    !letterExistsInGuess(value) && removeColors(value);

    isAllLettersValidated(game3Map) && nextGame();
  })
}

function game4() {
  simpleMap.forEach((value, key) => {

    numberOfOccurences(value) == 1 && applyStyleToLetter(value, 'ligthgreen');
    numberOfOccurences(value) == 2 && validateLetter(value);
    isLetterValide(value) && numberOfOccurences(value) == 0 && unvalidateLetter(value);
    isAllLettersValidated(simpleMap) && nextGame();
  })
}

function isAllLettersValidated(letterMap) {
var validated = true;
  letterMap.forEach((value, key) => {
    if (!validatedLetters.has(value)) validated = false;
  })
  return validated;
}

function isLetterValide(value) {
  return document.getElementById(value).classList.contains(CLASS_LETTER_VALID);
}

function numberOfOccurences(letter) {
  return (guess.value.match(new RegExp(letter, "g")) || []).length;
}

function letterExistsInGuess(letter) {
  return guess.value.toLowerCase().indexOf(letter.toLowerCase()) > -1;
}

function letterIsInSamePositionInGuess(value, index) {
  return guess.value.charAt(index).toLowerCase() == value;
}

function applyStyleToLetter(value, style) {
  removeColors(value);
  document.getElementById(value).classList.add(style);
}

function validateLetter(value) {
  applyStyleToLetter(value, CLASS_LETTER_VALID);
  validatedLetters.add(value);
}

function unvalidateLetter(value) {
  removeColors(value);
  validatedLetters.delete(value);
}

function removeColors(value) {
  document.getElementById(value).removeAttribute("class");
}

function missPlacedLetter(value) {
  document.getElementById(value).classList.add('orange');
}

function getGameNumber() {
  return parseInt(gameNumber.innerHTML);
}

function removeAllColors() {
  simpleMap.forEach((value, key) => {
    removeColors(value);
  })
}

function nextGame() {
  gameNumber.innerHTML = getGameNumber() + 1;
  guess.value = '';
  removeAllColors();
  validatedLetters = new Set();
}
guess.addEventListener('input', inputHandler);
