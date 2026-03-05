let tasks = [];

function show(){
    let ul = document.querySelector("#show")
    ul.innerHTML = ""
    tasks.forEach((task,index)=>{
        let li = document.createElement("li")
        ul.appendChild(li)
        li.innerHTML = `<div class="flex text-center  gap-4 mt-3 justify-between ">
        <span class="text-center p-4 items-center">${index+1} - ${task.text}</span><span>
        <button onclick="deleteTask(${index})" class="border bg-amber-500 hover:bg-lime-800 hover:text-white p-4 rounded-2xl">Delete</button>
        </span>
        </div>`
    })
    
}
function addtask(){
    let input = document.querySelector("#input")
    let add = document.querySelector("#addbtn")
    add.addEventListener("click",()=>{
        if(input.value === " ") return
        tasks.push({
            text:input.value,
            done:false
        })
       console.log(tasks);
       input.value = ""
       show() 
    })
}
function deleteTask(index){

    tasks.splice(index,1);

    show();

}

addtask()