// let arr = [1,2,3,4]
// let ar = arr.forEach((item)=>item + 1 )
// console.log(arr);
// let r = arr.map((item)=>item - 1)
// console.log(r);
// let f = arr.filter((item)=> item > 2 )
// console.log(f);




let btn = document.querySelector("#btn")


btn.addEventListener("click",async()=>{
     let response = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
     let alldata = await response.json()
     console.log(alldata);
     let show = document.querySelector("#show")
     alldata.forEach((item) =>{
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let img = document.createElement("img")
        h1.textContent = item.author
        img.src = item.download_url
        div.className="border  m-4 flex flex-col item-center p-4 justify-center"
        img.className = "w-80 object-cover rounded-full"
        h1.className="font-bold"
        div.appendChild(img)
        div.appendChild(h1)
        show.appendChild(div)
     })
})


