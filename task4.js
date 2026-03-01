let btn = document.querySelector("button")
let input = document.querySelector("#input")
let ul = document.querySelector("ul")

btn.addEventListener("click",()=>{
    let li = document.createElement("li")
    ul.appendChild(li);
    li.textContent = input.value;
})