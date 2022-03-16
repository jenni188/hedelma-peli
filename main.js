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

// voitot
var money = 50;
var win1 = 2;
var win2 = 4;
var win3 = 6;
var win4 = 8;
var win5 = 10;






// kuvan arvonta
const images = ['arryn.png' , 'lannister.png' , 'stark.png' , 'targaryen.png' , 'jackpot.png']
const locks = [0 , 0 , 0 , 0]

function stop(lockIndex){
    const slots = document.querySelectorAll(".slot-container .slot-col" )
   if (locks[lockIndex] == 0) {
       locks[lockIndex] = 1
       slots[lockIndex].classList.add('locked')
   } else {
       locks[lockIndex] = 0
       slots[lockIndex].classList.remove('locked')
   }
} 




function roll(){
    if (locks[0] == 0){
        let i = Math.floor(Math.random() * 5)
        document.getElementById('1').src = `./img/${images[i]}`
    }
    if (locks[1] == 0){
        let x = Math.floor(Math.random() * 5)
        document.getElementById('2').src = `./img/${images[x]}`
    }
    if (locks[2] == 0){    
        let y = Math.floor(Math.random() * 5)
        document.getElementById('3').src = `./img/${images[y]}`
    }
    if (locks[3] == 0){
        let a = Math.floor(Math.random() * 5)
        document.getElementById('4').src = `./img/${images[a]}`
    }

 
    winnings();
    youWon();
}



function youWon(){
    if ('1' == images[4])
    money == money + win5
    renderMoney();
}

function winnings(){
    money = money - bet;
    renderMoney();
    if (money <= 0){
        alert("You are out of money!")
        location.reload();
    }
}

function renderMoney(){
    document.getElementById("money").innerHTML = "   " + money;
}
