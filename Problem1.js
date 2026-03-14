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


// let str = "Abdullah Al Mamun"
// //space onujayi alada hobe and array dibe

// let result = str.split(" ").map((item)=>item.split("").reverse().join(''))
// console.log(result.join(" "));


// let arr = [1,2,3,4,5]
// console.log(arr);
// let r = arr.reverse()
// console.log(arr);

// console.log(r);

// let re = []

// for(let i=arr.length-1;i>=0;i--){
//         re.push(arr[i])
// }
// console.log(arr);

// console.log(re);


// let arr = [1,2,3,4,5,6,7,8]
// let result = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i] % 2 === 0){
//         result.push(arr[i])
//     }
// }
// console.log(result.reverse());
// console.log(arr);



let str = "aaabbc"
let result = {}
for(let i=0;i<str.length;i++){
    if(result[str[i]]){
        result[str[i]]++
    }else{
        result[str[i]] = 1
    }
}
console.log(result);



