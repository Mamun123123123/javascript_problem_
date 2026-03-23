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



// let str = "aaabbc"
// let result = {}
// for(let i=0;i<str.length;i++){
//     if(result[str[i]]){
//         result[str[i]]++
//     }else{
//         result[str[i]] = 1
//     }
// }
// console.log(result);



// let arr = [1,2,2,3,4,4,5]
// let result = []
// for(let i=0;i<arr.length;i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i])
//         }
        
// }
// console.log(result);

// let arr = [100, 995, 30, 800, 40000]

// let max = arr[0]
// let second_max = arr[1]

// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         second_max = max
//         max = arr[i]
//     }else if(second_max<arr[i] && arr[i] !== max){
//         second_max = arr[i]
//     }
// }
// console.log(second_max);
// console.log(max);


// let str = "javascriptA"
// let vowels = "aeiouAEIOU"
// let count = 0
// for(let i = 0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         count++
//     }
// }
// console.log(count);

// let arr = [0, 1, false, 2, "", 3, null, undefined, "hello"]
// let falsy_value = [0,false,"",null,undefined]
// let result = []
// for(let i=0;i<arr.length;i++){
//     if(!falsy_value.includes(arr[i])){
//         result.push(arr[i])
//     }
// }
// console.log(result);

// let str = "JavaScript is very powerfulllyyyyy language"
// let result = str.split(" ")
// let max_word = result[0]
// for(let i=0;i<result.length;i++){
//     if(max_word.length<result[i].length){
//         max_word = result[i]
//     }
// }
// console.log(max_word);

// let str = "hello world"
// let result = str.split(" ")
// let c = result.map((item)=>item.charAt(0).toUpperCase() + item.slice(1))
// console.log(c.join(" "));

// let arr = [1,2,3,2,4,5,1,6]
// let duplicate = []
// let all = []
// for(let i=0;i<arr.length;i++){
//     if(!all.includes(arr[i])){
//          all.push(arr[i])
//     }else{
//         duplicate.push(arr[i])
//     }
// }
// console.log(duplicate);

// let arr = [1,2,3,4,6]

// let max = Math.max(...arr)

// for(let i = 1;i<=max;i++){
//     if(!arr.includes(i)){
//         console.log(i);
//     }
// }

// let str = "javascript"
// let result = str.split("")
// let r = []
// let vowels = "aeiouAEIOU"
// for(let i=0;i<result.length;i++){
//     if(!vowels.includes(str[i])){
//         r.push(str[i])
//     }
// }
// let without_vowel = r.join("")
// console.log(without_vowel);

// let str = "javascript"
// let vowels = "aeiouAEIOU"
// let result = ""

// for(let i=0;i<str.length;i++){
//     if(!vowels.includes(str[i])){
//         result += str[i]
//     }
// }

// console.log(result)


// let nums = [2,7,11,15]
// let target = 9
// let result = []
// for(let i=0;i<nums.length;i++){
//     if(nums[i]+nums[i+1] === target){
//         result.push(i,i+1)
        
//     }
// }
// console.log(result);

let ob = [
    {name:"A",dept:"IT"},
    {name:"B",dept:"HR"},
    {name:"C",dept:"IT"}
]
let result = {}
for (let i=0;i<ob.length;i++) {
    console.log(ob[i].dept);
    if(result[ob[i].dept]){
        result[ob[i].dept].push(ob[i])
    }else{
        result[ob[i].dept] = [ob[i]]
    }
    
}
console.log(result);

