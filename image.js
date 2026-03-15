// let arr = [1,2,3,4]
// let ar = arr.forEach((item)=>item + 1 )
// console.log(arr);
// let r = arr.map((item)=>item - 1)
// console.log(r);
// let f = arr.filter((item)=> item > 2 )
// console.log(f);




let btn = document.querySelector("#btn")
let h1 = document.querySelector("#h1")

btn.addEventListener("click",async()=>{
     let response = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
     let alldata = await response.json()
     console.log(alldata);
     alldata.forEach((item) =>{
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let img = document.createElement("img")
        
        div.appendChild(img)
        div.appendChild(h1)

     })
})


