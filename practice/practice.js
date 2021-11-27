// let boxElement = document.querySelector("#divelementone")

// // boxElement.addEventListener("click", function(){
// //     alert(" I Want to open the box!")
// // })
// // let body = document.getElementById("body")
// // body.addEventListener('click',function(){
// //     body.style.backgroundColor= "black"  
// // })

// const producCost = 100 ; 
// const discount = 20; 
// let shippingCost = 12;
// let shippingdate = "12-02-2021"

// let productTotal = producCost - discount + shippingCost ;

// console.log(productTotal);

// boxElement.innerHTML = "<button onclick = 'hello()' >click me </button> <br> <button> hai </button>"

// function hello(){
//     boxElement.innerHTML += "<p> Thank you for buying!</p>"
// }

// Template string or Template literals

// const email = 'jithinr72@gmail.com';

// const name = " jithin raj mm ";

// let concatinatedString = `Hi ${name} 
// your email id is 
// ${email}`
// console.log(concatinatedString)

// localStorage 

// localStorage.setItem("key_for","this is the value")
// localStorage.setItem("key_for","this is the value")
// console.log(localStorage.getItem("key_for"))
// localStorage.clear()
// console.log(localStorage.getItem("key_for"))
// var datas = [1, 2, 3];
// localStorage["datas"] = JSON.stringify(datas);

// // Retrieve
// var stored_datas = JSON.parse(localStorage["datas"]);
// console.log(typeof(localStorage["datas"]))

// console.log(typeof(stored_datas))
// console.log(stored_datas)
// console.log(typeof(stored_datas[0]))

// let stringArray = `["jithin raj mm"]`
// console.log(typeof stringArray)

// let arrayFormat = JSON.parse(stringArray)
// arrayFormat.push("is great")
// console.log(typeof arrayFormat)
// console.log(arrayFormat)
// stringFormatFromJsobject = JSON.stringify(arrayFormat)
// console.log( typeof stringFormatFromJsobject)

// let array = [1,2,3,4,"jithin"]
// localStorage.setItem("array",JSON.stringify(array))
// let arrayFromLocalStorage = JSON.parse(localStorage.getItem("array"))
// console.log(arrayFromLocalStorage) 

// fucntion with parameter argument is actual values 

// const welcomeelment = document.getElementById("welcome-el");
// function welcome(message){
//     welcomeelment.textContent = message ;

// }

// welcome('welcome to oooty nice to meet you');


// Function with multiple parameters 

// const welcomeElement = document.getElementById('welcome-el');
// function display(name, greetings){
//     welcomeElement.textContent =   ` ${name} , ${greetings}`
// }


// display("jithin","welcome to ooty nice to meet you");

// function with number parameters 
// const sumAll = document.getElementById('welcome-el');
 
// function add(num1, num2){
//     return num1 + num2 ;
// }

// sumAll.textContent = add(3,44);


// arrays and parameters

// let arrayExample = [1,2,3.4,5]

// function firstIndex(array){
//     let lengthOfArray = array.length;
//     return array[lengthOfArray - 1]
// }

// console.log(firstIndex(arrayExample))

function getFirst(arr){
    return arr[0]
}

console.log(getFirst([1,2,3,4,5]))