function errorShowing(){
    let errorParagraph = document.getElementById('error')
    errorParagraph.textContent = "Something went wrong, please try again"
}
let num1 = 8 ;
let num2 = 2 ; 

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sum = document.getElementById("sum-el")

function add(){
    sum.textContent= "sum : "+ (num1 + num2  )
}

function mul(){
    sum.textContent = "Sum : " + (num1 * num2)
}

function sub() {
    sum.textContent = "Sum : " + (num1 - num2)
}

function div(){
    sum.textContent ="Sum : " + ( num1 / num2 )
}