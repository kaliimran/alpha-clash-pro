/* function play (){
    // step-1: hide the home screen. to hide the screen add the class hidden to the home section
    const homeSection = document.getElementById('homeScreen');
    homeSection.classList.add('hidden');

    // show the playground
    const playGroundSection = document.getElementById('playGroundScreen');
    playGroundSection.classList.remove('hidden');
} */


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