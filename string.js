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

let arr = [1,2,3,4,5]
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

let copy = arr[arr.length-1]
console.log(copy);
for(let i=arr.length-1;i>=0;i--)
{
    arr[i] = arr[i-1]
}
arr[0] = copy
console.log(arr);




