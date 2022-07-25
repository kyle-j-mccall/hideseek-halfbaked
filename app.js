// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const resetButton = document.getElementById('reset-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

resetButton.addEventListener('click', () => {
    correctGuesses = 0;
    incorrectGuesses = 0;
    totalGuesses = 0;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = incorrectGuesses;
    totalEl.textContent = totalGuesses;
    boulderContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    shedContainer.classList.remove('face');
});

function handleGuess(correctSpot, userGuess) {
    boulderContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    shedContainer.classList.remove('face');
   
    if (userGuess === correctSpot) {
    correctGuesses++;
    totalGuesses++;
    winsEl.textContent = correctGuesses;
   } else if (userGuess !== correctSpot) {
    incorrectGuesses++;
    totalGuesses++
    lossesEl.textContent = incorrectGuesses;
    }

    if (correctSpot === 'boulder') {
        boulderContainer.classList.add('face');
    } else if (correctSpot === 'tree') {
        treeContainer.classList.add('face');
    } else if (correctSpot === 'shed') {
        shedContainer.classList.add('face');
    }
    

    totalEl.textContent = totalGuesses;

    

   
   
    // reset the styles
    // then increment the guesses
    // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}
