let str = "mamun"
let result = []
for(let i=0;i<str.length;i++){
        result.unshift(str[i])
}
console.log(result.join(''));

let arr = [1,5,9,2]
let max = arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max);
