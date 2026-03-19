// // let user = {
// //   name: "Mamun",
// //   age: 22,
// //   city: "Dhaka"
// // }
// // let count = 0
// // let result = []
// // for (const key in user) {
// //     console.log(user[key]);

// //  if(!result.includes(key)){
    
// //     result.push(key)
// //     count++
// //  }
    
// // }
// // console.log(count);


// // let obj = {
// //   a: 10,
// //   b: 20,
// //   c: 30
// // }


// // let sum = 0
// // for (const key in obj) {
// //    sum = sum+obj[key]
// // }
// // console.log(sum);


// // let str = "banana"
// // let result = {}

// // for(let i=0;i<str.length;i++){
// //     if(result[str[i]]){
// //         result[str[i]]++
// //     }
// //     else{
// //         result[str[i]] = 1
// //     }
// // }
// // console.log(result);

// let scores = {
//   math: 80,
//   english: 95,
//   science: 90
// }
// let results = []
// for (const key in scores) {
//     if(!results.includes(scores[key])){
//         results.push(scores[key])
//     }
// }
// console.log(results);
// let max = results[0]
// for(let i =0;i<results.length;i++){
//     if(max<results[i]){
//         max = results[i]
//     }
// }
// console.log(max);

// // let arr = ["apple","banana","mango"]
// // let re = {}
// // for(let i = 0 ;i<arr.length;i++){
        
// //     re[i] = arr[i]
    
// // }
// // console.log(re);

// let arr = ["apple","banana","apple","orange","banana"]
// let res = {}
// for(let i=0;i<arr.length;i++){
//     if(res[arr[i]]){
//         res[arr[i]]++
//     }else{
//         res[arr[i]] = 1
//     }
// }
// console.log(res);

// let obj = {
//   name: "Mamun",
//   city: "Dhaka"
// }

// let result = {}

// for(let key in obj){
//   result[obj[key]] = key
// }

// console.log(result)

// let str = "hello"
// let resultt = []
// for(let i = 0;i<str.length;i++){
//     if(resultt[str[i]]){
//         resultt[str[i]]++
//     }else{
//         resultt[str[i]] = 1
//     }
// }
// console.log(resultt);


// let arr = [
//   {name:"A", age:20},
//   {name:"B", age:20},
//   {name:"C", age:25}
// ]

// let result = {}

// for(let i = 0; i < arr.length; i++){
//   let age = arr[i].age
//   let name = arr[i].name

//   if(result[age]){
//     result[age].push(name)
//   } else {
//     result[age] = [name]
//   }
// }

// console.log(result)

let arr = [1,2,3,4]
let result = []

for(let i = 0; i < arr.length; i++){
    let product = 1
    
    for(let j = 0; j < arr.length; j++){
        if(i !== j){   
            product *= arr[j]
        }
    }
    
    result.push(product)
}

console.log(result)