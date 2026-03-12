let myName = "Abdullah Al Mamun"
let result1 = myName.split('')
let result2 = myName.split(' ')
console.log(result1);
let result3  = myName.slice(2,4) // start index 2 and end index 3
console.log(result3);
let result4 = myName.toUpperCase()
console.log(result4);

//reverse String.........
let result5 = ""
for(let i=myName.length;i>0;i--){
    result5 = result5 + myName.charAt(i)
}
console.log(result5);

//palindrom....
let str = "madam"
let ispallindrome = true
let i=0 ,j=str.length - 1
while(i<j){
    if(str.charAt(i) != str.charAt(j)){
        ispallindrome=false
        break
    }
    i++
    j--
}



