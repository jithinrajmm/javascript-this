(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
let count = 0;
let countEl = document.getElementById('count-el')
console.log(countEl)

function IncrementCount(){
    // let count;
    count = count + 1;

    console.log(count)


}


},{}]},{},[1]);
