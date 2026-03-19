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

// console.log(result)

let ar = [1,2,4,"m","a",10]
let result_string = ar.filter(item=>{
  if(typeof item === "number"){
    return true
  }else{
    return false
  }
})
// console.log(result_string);

let people = [
  { name: "Rahim", gender: "male", age: 25 },
  { name: "Karim", gender: "male", age: 30 },
  { name: "Ayesha", gender: "female", age: 22 },
  { name: "Ayesha", gender: "female", age: 20 },
  { name: "Fatema", gender: "female", age: 28 }
];

let name_ayesha = people.filter(item=>{
  if(item.name === "Ayesha"){
    return true
  }else{
    return false

  }
  
})
// console.log(name_ayesha);


let employees = [
  { id: 1, name: "Rahim", gender: "male", company: "Google", salary: 80000 },
  { id: 2, name: "Karim", gender: "male", company: "Microsoft", salary: 75000 },
  { id: 3, name: "Ayesha", gender: "female", company: "Google", salary: 82000 },
  { id: 4, name: "Fatema", gender: "female", company: "Amazon", salary: 78000 },
  { id: 5, name: "Sakib", gender: "male", company: "Amazon", salary: 90000 },
  { id: 6, name: "Nusrat", gender: "female", company: "Tesla", salary: 88000 },
  { id: 7, name: "Jamal", gender: "male", company: "Apple", salary: 87000 },
  { id: 8, name: "Sumaiya", gender: "female", company: "Microsoft", salary: 72000 },
  { id: 9, name: "Tanvir", gender: "male", company: "Google", salary: 71000 },
  { id: 10, name: "Mim", gender: "female", company: "Amazon", salary: 76000 },
  { id: 11, name: "Hasan", gender: "male", company: "Apple", salary: 83000 },
  { id: 12, name: "Rima", gender: "female", company: "Tesla", salary: 79000 },
  { id: 13, name: "Imran", gender: "male", company: "Microsoft", salary: 74000 },
  { id: 14, name: "Tania", gender: "female", company: "Google", salary: 77000 },
  { id: 15, name: "Arif", gender: "male", company: "Amazon", salary: 70000 },
  { id: 16, name: "Lima", gender: "female", company: "Apple", salary: 73000 },
  { id: 17, name: "Rakib", gender: "male", company: "Tesla", salary: 81000 },
  { id: 18, name: "Sadia", gender: "female", company: "Microsoft", salary: 85000 },
  { id: 19, name: "Naim", gender: "male", company: "Google", salary: 78000 },
  { id: 20, name: "Priya", gender: "female", company: "Amazon", salary: 86000 }
];

let male_group = []
let female_group = []

for(let key  in employees){
  if(employees[key].gender === "male"){
    male_group.push(employees[key])
  }else{
    female_group.push(employees[key])
  }
  
}
console.log(male_group);
console.log(female_group);

