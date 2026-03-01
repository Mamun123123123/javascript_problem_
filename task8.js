let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let add = document.querySelector("#A")
let sub = document.querySelector("#sub")
let mul = document.querySelector("#mul")
let div = document.querySelector("#div")
let p = document.querySelector("p")
add.addEventListener("click",()=>{
    let additon = Number(num1.value) + Number(num2.value);
    p.textContent = `Addition : ${additon}`
    
})
sub.addEventListener("click",()=>{
    let Subtraction = Number(num1.value) - Number(num2.value);
    p.textContent = `Subtraction : ${Subtraction}`
    
})
mul.addEventListener("click",()=>{
    let multiplication = Number(num1.value) * Number(num2.value);
    p.textContent = `Multiplication : ${multiplication}`
    
})
div.addEventListener("click",()=>{
    
    let divition = Number(num1.value) / Number(num2.value);
    p.textContent = `Divition : ${divition}`
    
})

