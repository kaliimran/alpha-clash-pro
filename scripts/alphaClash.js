/* function play (){
    // step-1: hide the home screen. to hide the screen add the class hidden to the home section
    const homeSection = document.getElementById('homeScreen');
    homeSection.classList.add('hidden');

    // show the playground
    const playGroundSection = document.getElementById('playGroundScreen');
    playGroundSection.classList.remove('hidden');
} */


function handleKeyboard(event){
    const playerPress = event.key;

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPress === expectedAlphabet){
        console.log('you press the right thing');
        console.log('you have pressed correctly', expectedAlphabet);
        // update score:
        // 1. get the current score
        const currentScoreElement = document.getElementById('currentScore');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // 2. increase the score by 1
        const newScore = currentScore + 1;
        // 3. show the update
        currentScoreElement.innerText = newScore
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame()
    }
    else{
        console.log('dhurr vaiya va apu... right key press koro');
        // step-1: get the current life number
        const currentLifeElement = document.getElementById('currentLife');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // step-2: reduce the life count

        const newLife = currentLife - 1;

        // step-3: display the update life count

        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboard)


// recap

/* document.addEventListener('keyup', function handleKeyboardButton(event){
    const playerPress = event.key;
    // console.log('player pressed',playerPress)

    // get the expected to press

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    // console.log(playerPress, expectedAlphabet);


    // check matched or not
    if(playerPress === expectedAlphabet){
        console.log('You get a point');
    }
    else{
        console.log('you missed, you lost a life');
    }
}) */


function continueGame(){
    // step-1: Generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;


    // set background color

    addBackgroundColorById(alphabet)
}



function play(){
    hideElementById('homeScreen');
    showElementById('playGroundScreen');
    continueGame()
};