// random number creation and accesing random element from the array with random numbers

// let hands = ['Rock','Paper','Scissors']

// function randomNumber(){
//     let number = Math.floor(Math.random()*3)
//     // console.log(hands[number] + "-" + number)
//     return hands[number]
// }
// let randomGame= randomNumber()
// console.log(randomGame)

let orangeEl = document.getElementById("orange-el");
let yellowEl = document.getElementById("yellow-el");

let fruitsGoods = ['Orange','Yellow','Orange','Yellow','Orange','Yellow'];

function orderingFruits(){
    for ( let i = 0; i< fruitsGoods.length ; i++){
        if (fruitsGoods[i] === 'Orange'){
            orangeEl.textContent += ' '+ fruitsGoods[i]
        }
        else if (fruitsGoods[i]=== 'Yellow'){
            yellowEl.textContent += ' '+'Yellow';

        }
        else{
            console.log("This color is not in the list")
        }
    }
}

orderingFruits()
