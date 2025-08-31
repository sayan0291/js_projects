let random_num = parseInt(Math.random() * 100 + 1);
let user_input = document.querySelector('#guessField');
let button = document.querySelector('#subt');
const loworhigh = document.querySelector('.lowOrHi');
const guess_slot = document.querySelector('.guesses');
const remianing = document.querySelector('.lastResult');
const restart = document.querySelector('.resultParas');
let hidden = document.querySelector('#guessField');

const p = document.createElement('p');

let num_slot = [];
let num_guess = 1;
let playgame = true;

if(playgame) {//
    button.addEventListener('click', function (e){
        e.preventDefault(); //stop to send form data to browser . so that you can use it
        const guess = parseInt(user_input.value);
        check_valid(guess);
    })
}

function check_valid(guess){
    //checking whether the user given a write number or not
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert("Enter a Valid Num Between 1 to 100");
    }else{
        num_slot.push(guess)
        if(num_guess === 10){
            display_guesses(guess);
            display_message(`Game Over !! The Random Num is ${random_num}`);
            end_game();
        }
        else{
            display_guesses(guess);
            check_matched(guess);
        }
    }
}


function check_matched(guess){
    //Now Checked if The User Guess and The Generated Num is Equal or Not
        if(random_num === guess){
            display_message(`You Hit The Random_Num ${random_num}`);
            end_game();
        }else if(random_num < guess){
            display_message("The Num Is TOOOOO High");
        }else if(random_num > guess){
            display_message("The Num Is tooooo low");
        }
}

function display_guesses(guess){
    //display messages analysis : past guesses ,remianing guesses
    user_input.value = ''; //user past input clear ...
    guess_slot.innerHTML += `${guess} `; //push user input in the num_slot
    num_guess++;
    remianing.innerHTML = `${11 - num_guess}`; //remaining attempts for gamer
}

function display_message(message){
    //display messages analysis : the guess is high or low or equal
    loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function end_game(){
    //end game !
    user_input.value = ''; //user input clear ...
    user_input.setAttribute('disabled', ''); //disable user input buttton
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`; //creating h2 as a button to start a new game 
    restart.appendChild(p);
    user_input.style.display = "none";
    button.style.display = "none";
    playgame = false;
    new_game();
}

function new_game(){
    //Start The New Game After click the Start New Game .....
    const restart_game = document.querySelector('#newgame');
    restart_game.addEventListener('click', function(e){
    random_num = parseInt(Math.random() * 100 + 1);
    num_slot = [];
    num_guess = 1;
    guess_slot.innerHTML = '';
    remianing.innerHTML = `${11 - num_guess}`;
    user_input.removeAttribute('disabled');
    restart.removeChild(p);
    loworhigh.innerHTML = '';
    button.style.display = "block";
    user_input.style.display = "block";
    playgame = true;
    })
}

function showHidden(){
    hidden.style.display = "block";
}