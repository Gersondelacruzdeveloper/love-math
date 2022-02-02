//wait for the Dom to finish loading running the fame
//Get the button elements and Add event listeners to them 

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert('you clicked submit!');

            }else{
                let gameType = this.getAttribute("data-type")
                alert(`you clicked ${gameType}`)

            }
        })

    }
})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function DisplayAdditionQuestion(){

}

function DisplaySubtractQuestion(){
    
}
function DisplayMultiplyQuestion(){
    
}