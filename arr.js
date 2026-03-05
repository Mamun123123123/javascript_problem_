//let arr = []
// let arr = new Array(3)
// console.log(typeof arr);

// console.log(arr);
// arr[0] = "hello"
// arr[1] = Number(prompt("enter value"))
// arr[2] = null
// arr.push(1)
// arr.push(2)
// arr.push("mamun")
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr[7] = "mamun"
// console.log(arr);
// console.log(arr[5]);
// console.log(typeof arr);

let arr = [10,20,30,40,50]
let sum =0
for(let i=0;i<arr.length;i++){
    sum +=arr[i]
}
console.log(sum);

let max_value = [20,10,30,40,90,50]
let max = max_value[0]
for(let i=1;i<max_value.length;i++){
    if(max<max_value[i]){
        max = max_value[i]
    }
}
console.log(max);
let min_value = [20,10,30,90,40,50]
let min = min_value[0]
for(let i=1;i<min_value.length;i++){
    if(min>min_value[i]){
        min=min_value[i]
    }
}
console.log(min);


