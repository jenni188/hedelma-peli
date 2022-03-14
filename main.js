//start modal
let modal = document.getElementById('myModal');



function openModal(){    
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

// bet

var bet = 0;
var bet1 = 1;
var bet2 = 2;
var bet3 = 3;


function changeBet1(){
        bet = bet1;
   renderBet();

}

function changeBet2(){
    bet = bet2;
    renderBet();
}

function changeBet3(){
    bet = bet3;
    renderBet();
}

function renderBet(){
    document.getElementById("bet").innerHTML = "   " + bet;
}

// kuvan arvonta
const images = ['arryn.png' , 'lannister.png' , 'stark.png' , 'targaryen.png']

function roll(){
    let i = Math.floor(Math.random() * 4)
    document.getElementById('1').src = `./img/${images[i]}`
    let x = Math.floor(Math.random() * 4)
    document.getElementById('2').src = `./img/${images[x]}`
    let y = Math.floor(Math.random() * 4)
    document.getElementById('3').src = `./img/${images[y]}`
    let a = Math.floor(Math.random() * 4)
    document.getElementById('4').src = `./img/${images[a]}`
}
