let starts = document.querySelector("#start");
let stops = document.querySelector("#stop")
let counter = document.querySelector("#counter")
let count = 0 ;
let time = null;
starts.addEventListener("click",()=>{
  
    time = setInterval(()=>{
       counter.textContent =  count++
    },1000)
    
})
stops.addEventListener("click", () => {
    clearInterval(time);
    counter.textContent = "0"
});