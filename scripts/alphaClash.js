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
    console.log('your random Alphabet',alphabet)
}



function play(){
    hideElementById('homeScreen');
    showElementById('playGroundScreen');
    continueGame()
};