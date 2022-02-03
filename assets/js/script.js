//wait for the Dom to finish loading running the fame
//Get the button elements and Add event listeners to them 

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute('data-type') === 'submit'){
                checkAnswer()
            }else{
                let gameType = this.getAttribute("data-type")
                runGame(gameType)
            }
        })
    }
    runGame("addition")
})

/**
 * The main game "loop", called when the script first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){
    //create two random number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1
    let num2 = Math.floor(Math.random() * 25) + 1

    if(gameType === 'addition'){
        DisplayAdditionQuestion(num1, num2)
    }else{
        alert(`Unknow game type: ${gameType}`)
        throw `Unknow game type: ${gameType}.Aborting`;
    }
}

/**
 * check the answer against thw first elemnt in 
 * then returned calculatioCorrectAnswer array
 */
function checkAnswer(){
let userAnswer = parseInt(document.getElementById("answer-box").value);
let correctAnswer = calculateCorrectAnswer()
let isCorrect = userAnswer === correctAnswer[0];

if(isCorrect){
    incrementScore()
  alert("hey! you got it right :D")
}else{
    incrementWrongAnswer()
    alert(`Awwwwww......you answered ${userAnswer}. the correct answer is ${correctAnswer[0]}`)
}
runGame(calculateCorrectAnswer[1])
}

/**
 * Get the operands(the numbers) and the operator (plus, minus, etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
let operand1 = parseInt(document.getElementById('operand1').innerText);
let operand2 = parseInt(document.getElementById('operand2').innerText);
let operator = document.getElementById('operator').innerText;

console.log('operator->'+ operator)

if(operator === "+"){
   return [operand1 + operand2, "addition"];
}else{
    alert(`Unimplemented operator ${operator}`)
    throw `Unimplemented operator ${operator}.Aborting`;
}
}
/**
 * Get the current score from the DOM and increments it by 1
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById("score").innerText = ++oldScore;
    console.log('oldscore->' + oldScore)
}


function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    console.log('oldscore->' + oldScore)

}
function DisplayAdditionQuestion(operand1, operand2){
document.getElementById('operand1').textContent = operand1
document.getElementById('operand2').textContent = operand2
document.getElementById('operator').textContent = "+";
}

function DisplaySubtractQuestion(operand1, operand2){
document.getElementById('operand1').textContent = operand1
document.getElementById('operand2').textContent = operand2
document.getElementById('operator').textContent = "-"
}

function DisplayMultiplyQuestion(){
    
}