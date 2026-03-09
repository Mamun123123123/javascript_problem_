let h1 = document.querySelector("h1")
h1.innerText = "Changed"


let btn = document.querySelector(".btn")

btn.addEventListener("click",(item)=>{
    item.target.innerText = "4.00"
    
})

console.log(btn);




