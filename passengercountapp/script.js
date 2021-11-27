// for (var i = 1; i < 5; i++) {
//     console.log(i);
//   }
//   // <-- logs the numbers 1 to 4
//   console.log('hello',i);
//   // <-- 5 (variable i still exists outside the loop)
  
//   // ES2015

// document.getElementById('count-el').innerText = 80 ;

// count  = 0;

// console.log(count)

// var count;

// let count = 0;

// console.log(count)


//  let myAge = 27 ;

//  console.log(myAge)
//  let age ;
//  console.log(age)
//  age = myAge
//  console.log(age)

// let myAge = 27;
// let humanDogRatio = 7 ;

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoint = 50 ;
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50 ;
// console.log(bonusPoint)


// bonusPoint -= 75 ;
// console.log(bonusPoint)

// bonusPoint += 45 ; 
// console.log(bonusPoint) ;

// // string

// let name = 'string is nothing but the sequence of characters is called string'
// let message = 'you have three notifications'

// let nameMessage = name + message

// task 2

// let name = "jithin raj mm"
// let greetings = "Hi, my name is "
// let myGreetings = greetings + ' ' + name
// console.log(myGreetings)

//  let a = 10
//  let b = '20'
//  let c = b + a
//  let d = a + b
//  console.log(c,d)


let count = 0;
let countEl = document.getElementById('count-el')
console.log(countEl)

function IncrementCount(){
    // let count;
    count = count + 1;
    countEl.innerText = count ;
    
    // console.log(count);

}
let visited = '' ;
let totalOfCount = 0 ;
let welcomeEl = document.getElementById('welcome-el')

function SaveCount(){
    let PreviousEntry = document.getElementById('countresult')
    PreviousEntry.style.visibility= 'visible'
    // visited = visited + count + " + " ;
    // PreviousEntry.innerText = 'Previous Entry : ' + visited ;
    // change the innerText to textContent
    PreviousEntry.textContent += count + " - " 
    totalOfCount += count;
    welcomeEl.innerText = 'Total Count : ' + totalOfCount
    count = 0;
    countEl.innerText = count ;
    
}

