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
