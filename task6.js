let clk = document.querySelector("#clock")

function abcd(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes()
    let seconds = now.getSeconds();
    if(hours<10) hours = "0" + hours
    if(minutes<10) minutes = "0" + minutes
    if(seconds<0) seconds = "0" +seconds
    clk.textContent = hours + ":" + minutes + ":" + seconds
    
}
setInterval(abcd,1000)
abcd()