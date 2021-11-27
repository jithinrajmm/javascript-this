



// next problem was cards value displaying while adding new cards
// array creation
var cards = [];
let sum = 0 ; 

// storing the state of the program 

let hasBlackJack = false ;
// this is for using isAlive variable note that when we start the game then the player is live,
// thats why we are using the variable value as true 

let isAlive = false ;



let message = " ";

// console.log(sum)
// console.log(hasBlackJack);
// console.log(isAlive);
// console.log(message)
let messageEl = document.getElementById('message-el') ;
// let sumEl = document.getElementById("sum-el") ;
let sumEl = document.querySelector("#sum-el") ;

let cardEl = document.querySelector("#card-el") ;

// Player details and object creation 

let player = {
    name: "jithin raj ",
    cash : " ₹145 "

}
let playerEl = document.querySelector("#player-el") ;
playerEl.textContent = player.name + player.cash ;

// Random number creation 

function randomCard(){

    // the aze value is 11; when we got 1 return 11
    // and jack-11, jack- 12, jack - 13, instead of this value return 10 for each

    let randomNumber = Math.floor(Math.random()* 13 ) + 1;

    if (randomNumber == 1){

        return 11;
    }

    else if (randomNumber == 11 || randomNumber == 12 || randomNumber ==13){

        return 10;
    }

    else {

        return randomNumber ;
    }
    

    // return Math.floor(Math.random() * 13) + 1;
    
    // return Math.random();
}
const startButton = document.getElementById('startbtn')



// starting game fuction work after start the game 
// we need to change that into another name
// for that changing the name of function startGame to renderGame
// and calling that renderGame function from startGame function
function startGame(){

    // create two variables firstCard and secondCard

    let firstCard = randomCard();
    let secondCard = randomCard() ;
    sum += firstCard + secondCard ; 
    cards.push(firstCard,secondCard);
    isAlive = true ;
    
    startButton.style.display = "none"
    renderGame() ;
}


function renderGame(){

    sumEl.textContent = "Sum : " + sum ;

    // cardEl.textContent = "Cards : " + cards[0] + " " + cards[1] ;
    cardEl.textContent = 'Cards : '
    for (let i = 0 ; i < cards.length ; i++){
        cardEl.textContent += cards[i] + " " ;
    }
 
    

    if(sum <= 20){
        message = "Do you want to draw the card" ;

    } 
    
     else if (sum === 21){
        message = "wow you've got jack port";
        hasBlackJack = true ;
    }

    else {
        isAlive = false ;
        message = "You're out of the game";
        // window.location.reload()

        window.setTimeout(function(){
            window.location.reload()
        },3000)
         
    }
    if (message === "You're out of the game" ){
        messageEl.style.color = "red";
        messageEl.textContent = message ;
    }
    else{
        messageEl.textContent = message ;

    }
    
    
    // console.log(message)
    // alert("game started")
}

// Adding new card 



function newCard() {

    // console.log(cards)

    // only allow new card if the user is alive and he does not have the blackjack


    if (isAlive && hasBlackJack === false){

        let newCards = randomCard();

        cards.push(newCards) ;
        
        sum += newCards ;
        renderGame() ;

    }
    else {
        messageEl.textContent = "Your not eligible for new card " ;
        

    }

    
    
    }

