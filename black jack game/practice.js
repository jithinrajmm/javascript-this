// // let age = 21 ;


// // if (age <= 21 ){
// //     console.log("Sorry You can't enter the club")
// // } else {
// //     console.log("Welcome")
// // }

// // let age2 = 100;

// // if (age2 <100 ){
// //     console.log("You'r not eligibel for birthday card ")

// // } else if (age2 === 100){
// //     console.log("You are eligible for bithday card , Congrats!")
// // }else {
// //     console.log("Your have allready gotten")
// // }

// // let name = 100

// // boolean expression

// console.log(4===3)//false 
// console.log(5 > 2) // true
// console.log(12 > 12 )//false
// console.log(3 < 0)// false
// console.log(3 >= 3)// true
// console.log(11 <= 11)//true
// console.log(3 <= 2)// false

// // array concept

// // array is orderd list of items 
// // array is complex data type
// // array is known as composite because of array is composition of multiple datatype and its values
// // indexd base calling allowed in array
// // can store different datatype
// // string, Numbers, boolean are the premitive datatype in jacascript and array is composite or 
// // complex datatype

// let selfIntro = new Array('jithin raj ', 27 , false)
// console.log(selfIntro)
// console.log(selfIntro.length)
// console.log(selfIntro[0])
// console.log(selfIntro[1])

// let messages = [ 
//     "hi",
//     "hello"
// ]

// let newMessage = "How are you !" ;

// messages.push(newMessage) ;

// console.log(messages)

// messages.pop()

// console.log(messages)

// // for loop start condition and incrementing IDBCursorWithValue

// // for ( var count = 10 ; count <=100 ; count +=10){
// //     console.log(count);
// // }

// let numbers = [
//     1,2,3,4
// ]

// for ( let i = 0; i < numbers.length ; i++){
//     console.log(numbers[i]);
// }

// // returning value in a function
// let player1 = 134;
// let player2 = 134;

// function randomNumber(){
//     if (player1 < player2){
//         return player1;
//     }
//     else if ( player2 < player1){
//         return player2;
//     }
//     else {
//         return "both a)re equal time";
//     }
    
// }
// console.log('This number is return form the function which has name random number',randomNumber());


// let racingTime = 122;
// let racingTime2 = 123;

// function findingRacetimeTotal(){
//     return racingTime + racingTime2;
// }
// let totalRacingTime = findingRacetimeTotal()

// console.log(totalRacingTime);

// What does the random number do

// answer : it return decimal number from 0 to less than 1 its means doesnot include 1;
// this is not cryptographic numbers is less security
// math.floor(math.random()* max value)-> it provide the integer number from 0 to the max value

let randomNumMath= Math.floor(Math.random()*6)+1
console.log(randomNumMath)

function rand(){
    return Math.floor(Math.random() * 6 ) +2
}


// Logical Operator AND OR NOT
let hasCompleteChallenge = false ;
let hasHintPoint = false ;

if (hasCompleteChallenge === false && hasHintPoint === false){
    console.log("Your solution Here");
}

// OR

let likeDocumentry = true;
let likeStratup = false ;

function recommendedMovies(){
    if (likeDocumentry === true || likeStartup === true){
        console.log("jithin raj mm");
    }
}
recommendedMovies()

// objects in javscript

// it is the composite and complex datatype , it including all premitive datatypes , also we can store the objects in the obects
 
let course = {
    tittle: 'Css grid',
    lesson: 18,
    creator: 'jithin raj',
    duration: 1 + "hour",
    tags : [ "HTML","CSS"]
}
// console.log(course.tittle,course.creator,course.duration)
console.log(course.tags[1]) // this is traditional way  to acces the element, using . 
// objectname.properties or function
console.log(course["lesson"]) // this is called bracket notation

let airBnbTrips = {

    place : "india",
    cost : 1000,
    food : true,
    location : [ "Hydrabad", "Delhi"]
}

console.log(airBnbTrips.place,airBnbTrips.location)

// anonymous function 

let functionInsideObjects =  {
    anonymousFunction : function(){
        console.log("Hello jithin this is anonymous function ") ;
    }

}
functionInsideObjects.anonymousFunction()

// Practices 

let person = {
    name: "jithin raj mm",
    age : 27,
    country : "india"
}

function logData(){
    console.log (person.name + " is " + person.age + 'Years old and living in '+ person.country)
}
logData()

// if else 

let age  = 68 ;

function passenger(){
    if (age < 6){
        console.log("free");
    }
    else if (age < 18){
        console.log("child discount");
    }
    else if (age < 27){
        console.log("student discount");
    }
    else if (age < 67){
        console.log("full price");

    }
    else {
        console.log("senior citizen discount ");
    }
}
passenger()

// for loops and arrays 

function arrayCreationLogout()

{
    let array = ['India','United State','Indonatia','China'];
    for ( let i = 0; i<array.length ; i++)
    {
        console.log(array[i]);
    }
}
arrayCreationLogout()

let cats = ['Bob','jinoop','ramu']
let cat = cats.pop()
console.log(cat)
let pushf = cats.push("jack");
console.log(pushf,cats);
let last = cats.push("last Element")
console.log(last)


// Guys this is the function for adding and removing elements from array
// pop for removing the last element from the array
// and pop return the removed element
// push used to add the element at the end of array
// push return the length of array
// shift is used to remove the first item from the array
// unshift is used to add element to the start of the array

let largeCountries = ["Tuvalu","India","USA","Monsco"]
largeCountries.shift()
largeCountries.pop()
console.log(largeCountries)
largeCountries.unshift("China");
largeCountries.push("Pakistan");
console.log(largeCountries)


function logicalOperator(){
    let dayOfMonth= 13;
    let day = "Friday";
    if (dayOfMonth === 13 && day === "Friday"){
        console.log("This is the Horrible day for you guys");
    }
}

logicalOperator()




