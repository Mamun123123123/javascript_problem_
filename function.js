  /// sum of array problem 1
// let arr = [1,2,3,4,5,6,7,8,9,10]
function sum_Of_array(arr){
    // console.log(arr);
    return arr.reduce((item,sum)=>item+sum,0)
}
console.log(sum_Of_array(arr))

////// check a given string is a palindrome or not

// let str = "madam"
function isPalindrome(str){
    return str === str.split('').reverse().join('')
}
// console.log(isPalindrome(str));


// let str = ["madam","mamun","amma"]
// let result = []
// for(let i=0;i<str.length;i++){
//    result.push((isPalindrome(str[i])))
// } 
// console.log(result);


let num = 5
function factorial(n){
 if(n===0)return 1
 return n*factorial(n-1)
}
console.log(factorial(num))


function flattenDeep(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) 
      ? acc.concat(flattenDeep(val)) 
      : acc.concat(val);
  }, []);
}

const nestedArray = [1, [2, [3, [4,[0], 5]], 6], 7];

console.log(flattenDeep(nestedArray));

function removeDuplicate(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicate([1,2,2,3,4,4]))


function flatten(arr){
    return arr.flat(Infinity)
}

console.log(flatten([1,[2,[3,4],5]]))

function deepClone(obj){
    return JSON.parse(JSON.stringify(obj))
}
function isAnagram(a, b){
    return a.split('').sort().join('') === b.split('').sort().join('')
}

console.log(isAnagram("listen", "silent"))

let arr = [1,2,2,3,4,4,5]
let result = []

for (let i = 0; i < arr.length; i++) {
  if (!result.includes(arr[i])) {
    result.push(arr[i])
  }
}

console.log(result) 


