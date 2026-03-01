let inp = document.querySelector("input")
let show = document.querySelector("#show")

inp.addEventListener("input",()=>{
    show.textContent = `Characters: ${inp.value.length}`;
})