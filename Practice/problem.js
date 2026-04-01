// // let str = "mamun"
// // let result = []
// // for(let i=0;i<str.length;i++){
// //         result.unshift(str[i])
// // }
// // console.log(result.join(''));

// // let arr = [1,5,9,2]
// // let max = arr[0]
// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]>max){
// //         max = arr[i]
// //     }
// // }
// // console.log(max);


// let arr = [2,1,1,4,0,2,6,8]
// let removeDuplicate = []
// for(let i=0;i<arr.length;i++){
//     if(!removeDuplicate.includes(arr[i])){
//              removeDuplicate.push(arr[i])
//     }
// }
// console.log(removeDuplicate);

// // let str = "mamun"
// // let vowels = "aeiouAEIOU"
// // let result = ""
// // for(let i=0;i<str.length;i++){
// //     if(vowels.includes(str[i])){
// //         result += str[i]
// //     }
// // } 
// // console.log(result);
// // console.log(result.length);

// // let str = "mamun"
// // let result = str.charAt(0).toUpperCase() + str.slice(1)
// // console.log(result);

// // let str = "mamun"
// // let vowels = "aeiouAEIOU"
// // let count = 0
// // for(let i=0;i<str.length;i++){
// //     if(!vowels.includes(str[i])){
// //         count++
// //     }
// // }
// // console.log(count);

// // let str = "This is my javascript project"
// // let count = 0
// // let result = str.split(" ")
// // console.log(result.length);

// let user = {
//     name : "mamun",
//     age : 23,
//     address : {
//         city : "Dhaka",
//         country : "Bangladesh"
//     },
//     salary : 120
// }

// for (const key in user) {
//     console.log(key ,user[key]);
    
// }

// let obj = {
//     a:10,b:20,c:30
// }
// let sum = Object.values(obj).reduce((a,b)=>a+b,0)
// console.log(sum);



// let str = "mamunmamun"
// let result = {}
// for(let i=0;i<str.length;i++){
//     if(result[str[i]]){
//         result[str[i]]++
//     }else{
//         result[str[i]] = 1
//     }
// } 

// console.log(result);

// // let users = [
// //   { name: "A", age: 20 },
// //   { name: "B", age: 20 },
// //   { name: "C", age: 25 }
// // ];

// let groupByAge = {}

// // for (const user of users) {
// //     if(!groupByAge[user.age]){
// //         groupByAge[user.age] = []
// //     }
// //     groupByAge[user.age].push(user)
              
// // }
// // console.log(groupByAge);

// let ar = [1,2,3,4]
// let r = ar.find(item => item>1)
// let r2 = ar.filter(item => item>1)
// console.log(r);
// console.log(r2);

// let users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 16 },
//   { name: "C", age: 25 }
// ];

// let sorted = users.sort((a,b)=>a.age - b.age)
// console.log(sorted);

// let arr = [1, [2, [3, 4]], 5];
// function flatten(arr){
//     let result = []
//     for(let ar of arr){
//         if(Array.isArray(ar)){
//             result = result.concat(flatten(ar))
//         }else{
//             result.push(ar)
//         }
//     }
//     return result
// }
// console.log(flatten(arr));


let arr =  [2,1,4,6,8]
let max = arr[0]
let secondmax = arr[1]
for(let i=2;i<arr.length;i++){
    if(arr[i]>max){
        secondmax = max
        max = arr[i]
    }else if (arr[i]>secondmax && arr[i] !=max){
             secondmax = arr[i]
    }
}
console.log(secondmax);
