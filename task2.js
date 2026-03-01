let form = document.querySelector("#form");
let username = document.querySelector("#username");
let user = document.querySelector("#user")
let password = document.querySelector("#password")
let pass = document.querySelector("#pass")

form.addEventListener("submit",(dets)=>{
    dets.preventDefault();
    if(username.value.length < 3){
        user.style.display = "inline" 
    }else{
        user.style.display = "none"
    }


    if(password.value.length < 6){
        pass.style.display = "inline"
    }
    else{
        pass.style.display = "none"
    }
    if(username.value.length >=3 && password.value.length >=6){
        alert("login successfull")
    }
})