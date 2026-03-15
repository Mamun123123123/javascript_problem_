// let myName = "Abdullah Al Mamun"
// let result1 = myName.split('')
// let result2 = myName.split(' ')
// console.log(result1);
// let result3  = myName.slice(2,4) // start index 2 and end index 3
// console.log(result3);
// let result4 = myName.toUpperCase()
// console.log(result4);

// //reverse String.........
// let result5 = ""
// for(let i=myName.length;i>0;i--){
//     result5 = result5 + myName.charAt(i)
// }
// console.log(result5);

//palindrom....
// let str = "madam"
// let ispallindrome = true
// let i=0 ,j=str.length - 1
// while(i<j){
//     if(str.charAt(i) != str.charAt(j)){
//         ispallindrome=false
//         break
//     }
//     i++
//     j--
// }


// let str = "aabbcddeff"
// let result = {}
// for(let i=0;i<str.length;i++){
//     if(result[str[i]]){
//         result[str[i]]++
//     }else{
//         result[str[i]] = 1
//     }
// }

// for(let i =0 ; i<str.length;i++){
//     if(result[str[i]] === 1){
//         console.log(str[i]);
//         break
//     }
// }

// let arr = [1,2,3,4,5]
// let result = {
//     even:[],odd:[]
// }
// for(let i=0;i<arr.length;i++){
//       if(arr[i] % 2 === 0){
//         result.even.push(arr[i])
//       }
//       else{
//         result.odd.push(arr[i])
//       }
// }
// console.log(result);

// let copy = arr[arr.length-1]
// console.log(copy);
// for(let i=arr.length-1;i>=0;i--)
// {
//     arr[i] = arr[i-1]
// }
// arr[0] = copy
// console.log(arr);

// let a = [1,2,3,4]
// let b = [3,4,5,6]
// let resu = []
// for(let i=0;i<a.length;i++){
//   for(let j=0;j<b.length;j++){
//     if(a[i] === b[j]){
//         resu.push(a[i])
//     }
//   }
     
// }
// console.log(resu);


// let arr = [0,1,0,3,12]
// let result = []
// let zero_count = 0
// for(let i=0;i<arr.length;i++){
//     if(arr[i] === 0){
//         zero_count++
//     }else{
//         result.push(arr[i])
//     }
// }
// for(let i =0;i<zero_count;i++){
//     result.unshift(0)
// }
// console.log(result);

// let str = "programming"
// let result1 = ""
// for(let i=0;i<str.length;i++){
//     if(result1.includes(str[i])){
//         continue
//     }else{
//         result1 +=str[i]
//     }
// }
// console.log(result1);

// let c = Object.assign({},str)
// console.log(c);


// let ar = ["apple","banana","apple","orange"]
// let r = {}
// for(let i =0;i<ar.length;i++){
//     if(r[ar[i]]){
//         r[ar[i]]++
//     }else{
//         r[ar[i]] = 1
//     }
// }
// console.log(r);

let nums = [2,7,11,15]
let target = 9
let result = []

for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        if(nums[i] + nums[j] === target){
            result.push(nums[i])
            result.push(nums[j])
        }
    }
}

console.log(result);


let a = [1,3,5]
let b = [2,4,6]

let results = []
let i=0,j=0

while(i<a.length && j<b.length){
    if(a[i] < b[j]){
        results.push(a[i])
        i++
    }else{
        results.push(b[j])
        j++
    }
}

console.log(results.concat(a.slice(i)).concat(b.slice(j)))