// let str = "mamun"
// let result = []
// for(let i=0;i<str.length;i++){
//         result.unshift(str[i])
// }
// console.log(result.join(''));

// let arr = [1,5,9,2]
// let max = arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);


let arr = [2,1,1,4,0,2,6,8]
let removeDuplicate = []
for(let i=0;i<arr.length;i++){
    if(!removeDuplicate.includes(arr[i])){
             removeDuplicate.push(arr[i])
    }
}
console.log(removeDuplicate);

let str = "mamun"
let vowels = "aeiouAEIOU"
let result = ""
for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        result += str[i]
    }
} 
console.log(result);
console.log(result.length);


