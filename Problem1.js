// let result = str.split(' ')
// console.log(result);
// let max = result[0]
// for(let i=1;i<result.length;i++){
   
//     if(max.length <result[i].length){
//         max = result[i]
//     }

// }
// console.log(max);



// for(let i=0;i<str.length;i++){
//         if(str[i]+str[i+1] === "mu"){
//             result.push(str[i]+str[i+1])
//         }
// }

// let str = "Abdullah al mamun"

// let result = {}
// let count = 0;
// for(let i=0;i<str.length;i++){
//     if(result[str[i]]){
//         result[str[i]]++
//     }else{
//         result[str[i]] = 1
//     }
// }
// console.log(result);

// let str = "Abdullah"

// let result = ""

// for(let i = str.length-1; i >= 0; i--){
//     result += str[i]
// }

// console.log(result)


let str = "Abdullah Al Mamun"
//space onujayi alada hobe and array dibe

let result = str.split(" ").map((item)=>item.split("").reverse().join(''))
console.log(result.join(" "));




