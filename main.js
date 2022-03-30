
// bet



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
var bet = 1;
var bet1 = 1;
var bet2 = 2;
var bet3 = 3;
var money = 50;
var price = 0;

// Lukittuja rullia on aluksi 0
var lockedRolls = 0

// Voiko lukitusta käyttää - alkutilanteessa ei
var canUseLocks = false;


// kuvan arvonta
const images = ['arryn.png' , 'lannister.png' , 'stark.png' , 'targaryen.png' , 'jackpot.png']
const locks = [0 , 0 , 0 , 0]
const slots = [0 , 0 , 0 , 0]

function freeLocks(){
    const slots = document.querySelectorAll(".slot-container .slot-col" )
    locks[0] = 0
    slots[0].classList.remove('locked')
    locks[1] = 0
    slots[1].classList.remove('locked')
    locks[2] = 0
    slots[2].classList.remove('locked')
    locks[3] = 0
    slots[3].classList.remove('locked')

}

function stop(lockIndex){


    if (canUseLocks == false){ // if (!canUseLocks)
        return
    }

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
    
    // Slot 1
    // Onko lukko1 auki?
    if (locks[0] == 0){
        let i = Math.floor(Math.random() * 5)
        slots[0] = i
        document.getElementById('1').src = `./img/${images[i]}`
    } else {
        lockedRolls = lockedRolls + 1
    }
   
    if (locks[1] == 0){
        let x = Math.floor(Math.random() * 5)
        slots[1] = x
        document.getElementById('2').src = `./img/${images[x]}`
    } else {
        lockedRolls = lockedRolls + 1
    }

    if (locks[2] == 0){    
        let y = Math.floor(Math.random() * 5)
        slots[2] = y
        document.getElementById('3').src = `./img/${images[y]}`
    } else {
        lockedRolls = lockedRolls + 1
    }

    if (locks[3] == 0){
        let a = Math.floor(Math.random() * 5)
        slots[3] = a
        document.getElementById('4').src = `./img/${images[a]}`
    } else {
        lockedRolls = lockedRolls + 1
    }

    if (lockedRolls > 0){
        freeLocks()
        lockedRolls = 0
        canUseLocks = false
    } else {
        canUseLocks = true
    }
   
 
    winnings();
    youWon();
}




function youWon(){
    if (slots[0] == slots[1] && slots[1] == slots[2] && slots[2]== slots[3]){
        if (slots[0] == 1){        
            money = money + bet * 2
            price = bet * 2
            renderPrice();
            renderMoney();
            triggerModal();
        }
        if (slots[0] == 3){
            money = money + bet * 4
            price = bet * 4
            renderPrice();
            renderMoney();
            triggerModal();
        }
        if (slots[0] == 2){
            money = money + bet * 6
            price = bet * 6
            renderPrice();
            renderMoney();
            triggerModal();
        }
        if (slots[0] == 0){
            money = money + bet * 8
            price = bet * 8
            renderPrice();
            renderMoney();
            triggerModal();
        }
        if (slots[0] == 4){
            money = money + bet * 10
            price = bet * 10
            renderPrice();
            renderMoney();
            triggerModal();
        }
    }
    if (slots[0] == slots[1] && slots[1] == slots[2] && slots[2] != slots[3] ){
        if (slots[0] == 4){        
            money = money + bet * 5
            price = bet * 5
            renderPrice();
            renderMoney();
            triggerModal();
        }
    }
    if (slots[1] == slots[2] && slots[2] == slots[3] && slots[0] != slots[1] ){
        if (slots[1] == 4){        
            money = money + bet * 5
            price = bet * 5
            renderPrice();
            renderMoney();
            triggerModal();
        }
    }
    if (slots[2] == slots[3] && slots[3] == slots[0] && slots[1] != slots[2] ){
        if (slots[0] == 4){        
            money = money + bet * 5
            price = bet * 5
            renderPrice();
            renderMoney();
            triggerModal();
        }
    }
    if (slots[0] == slots[1] && slots[1] == slots[3] && slots[1] != slots[2] ){
        if (slots[0] == 4){        
            money = money + bet * 5
            price = bet * 5
            renderPrice();
            renderMoney();
            triggerModal();
        }
    }
}






function winnings(){
    money = money - bet;
    renderMoney();
    if (money <= 0){
        triggerModal2();
        
    }
}

function triggerModal(){
    $("#myModal2").modal('show');
}

function triggerModal2(){
    $("#myModal3").modal('show');
}

function renderMoney(){
    document.getElementById("money").innerHTML = "   " + money;
}

function renderPrice(){
    document.getElementById("price").innerHTML = "   " + price;
}

function restart(){
    location.reload();
}
