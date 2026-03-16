// let user = {
//   name: "Mamun",
//   age: 22,
//   city: "Dhaka"
// }
// let count = 0
// let result = []
// for (const key in user) {
//     console.log(user[key]);

//  if(!result.includes(key)){
    
//     result.push(key)
//     count++
//  }
    
// }
// console.log(count);


let obj = {
  a: 10,
  b: 20,
  c: 30
}


let sum = 0
for (const key in obj) {
   sum = sum+obj[key]
}
console.log(sum);


let str = "banana"
let result = {}

for(let i=0;i<str.length;i++){
    if(result[str[i]]){
        result[str[i]]++
    }
    else{
        result[str[i]] = 1
    }
}
console.log(result);

let scores = {
  math: 80,
  english: 95,
  science: 90
}
let results = []
for (const key in scores) {
    if(!results.includes(scores[key])){
        results.push(scores[key])
    }
}
console.log(results);
let max = results[0]
for(let i =0;i<results.length;i++){
    if(max<results[i]){
        max = results[i]
    }
}
console.log(max);
