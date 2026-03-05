let tasks = [];
let editIndex = -1;

function show(){

    let ul = document.querySelector("#show");

    ul.innerHTML = "";

    tasks.forEach((task,index)=>{

        let li = document.createElement("li");

        li.innerHTML = `
        <div class="flex gap-4 mt-3 justify-between">

        <span>${index+1} - ${task.text}</span>

        <div class="space-x-2">

        <button onclick="editTask(${index})"
        class="bg-blue-500 text-white p-2 rounded">
        Edit
        </button>

        <button onclick="deleteTask(${index})"
        class="bg-red-500 text-white p-2 rounded">
        Delete
        </button>

        </div>

        </div>
        `;

        ul.appendChild(li);

    });
}

function addtask(){

    let input = document.querySelector("#input");
    let add = document.querySelector("#addbtn");

    add.addEventListener("click",()=>{

        if(input.value.trim() === "") return;

        if(editIndex === -1){

            tasks.push({
                text: input.value
            });

        }else{

            tasks[editIndex].text = input.value;

            editIndex = -1;
        }

        input.value = "";

        show();

    });
}

function deleteTask(index){

    tasks.splice(index,1);

    show();

}

function editTask(index){

    let input = document.querySelector("#input");

    input.value = tasks[index].text;

    editIndex = index;

}

addtask();