const computerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDispay = document.getElementById('result') 
const possibleChoices = document.querySelectorAll('buttons')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
})) 