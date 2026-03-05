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

// let arr = [10,20,30,40,50]
// let sum =0
// for(let i=0;i<arr.length;i++){
//     sum +=arr[i]
// }
// console.log(sum);

// let max_value = [20,10,30,40,90,50]
// let max = max_value[0]
// for(let i=1;i<max_value.length;i++){
//     if(max<max_value[i]){
//         max = max_value[i]
//     }
// }
// console.log(max);
// let min_value = [20,10,30,90,40,50]
// let min = min_value[0]
// for(let i=1;i<min_value.length;i++){
//     if(min>min_value[i]){
//         min=min_value[i]
//     }
// }
// console.log(min);


// let ar = [20,30,10,40,90,80,30,400,400,400,400]
// let first_max = Math.max(ar[0],ar[1])
// let second_max = Math.min(ar[0],ar[1])
// for(let i = 2;i<ar.length;i++){
//     if(first_max<ar[i]){
//         second_max = first_max
//         first_max = ar[i]   
//     }else if(second_max<ar[i] && first_max != ar[i]){
//         second_max = ar[i]
//     }
// }
// console.log(second_max);

// let arrr = [40,50,30,90,100,500,800]
// let first_min = Math.min(arrr[0],arrr[1])
// let second_min = Math.max(arrr[0],arrr[1])
// for(let i=2;i<arrr.length;i++){
//     if(first_min>arrr[i]){
//         second_min=first_min
//         first_min=arrr[i]
//     }else if(second_min>arrr[i] && first_min!== arrr[i]){
//         second_min = arrr[i]
//     }
// }
// console.log(first_min);

// console.log(second_min);


// let array = [10,20,30]
// let temp = new Array(array.length)
// let j=0
// for(let i=array.length-1;i>=0;i--){
//     temp[j]=array[i]
//     j++
// }
// console.log(temp);

// let i =0,j=array.length-1
// while(i!=j){
//     let temp = array[i]
//     array[i] = array[j]
//     array[j] =temp
//     i++
//     j--
// }
// console.log(array);



// let a = [0,1,0,1,1,0,0,1,1,1,0]
// let i=0,j=0
// while(i<a.length){
//     if(a[i]==0){
//         let temp = a[i]
//         a[i]=a[j]
//         a[j]=temp
//         j++
//     }
//     i++
// }
// console.log(a);

// let arr = [1,2,3,4,5]
// let copy = arr[0]
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1]
// }
// arr[arr.length-1] = copy
// console.log(arr);

// let ar = [1,2,3,4,5]
// let copy_ = ar[ar.length-1];

// console.log(copy_);


// for(let i=ar.length-1;i>=0;i--){
//     ar[i] = ar[i-1]
// }
// ar[0] = copy_

// console.log(ar);

// let arr = [1,2,3,4,5]

// let k=2
// for(let j=0;j<k;j++){
//     let copy = arr[0]
//     for(let i=0;i<arr.length-1;i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1] = copy
// }
// console.log(arr);

// let arr = [1,2,3,4,5]
// let k = 2
// for(let j=0;j<k;j++){
//     let copy = arr[arr.length-1]
//     for(let i=arr.length-1;i>=0;i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = copy
// }
// console.log(arr);

// let ar = [...arr]
// console.log(ar);

// let arr = [0,0,0,1,1,1,2,2,3,3,4,5,6,7,7]

// let j = 1

// for(let i=0;i<arr.length-1;i++){
//     if(arr[i] != arr[i+1]){
//         arr[j] = arr[i+1]
//         j++
//     }
// }

// console.log(arr.slice(0,j))

// let ar = [2,1,3,2,4,1,6]
// let result = []
// for(let i = 0;i<ar.length ; i++){
//     if(!result.includes(ar[i])){
//         result.push(ar[i])
//     }
// }
// console.log(result);

let arr1 = [1,3,5] 
let arr2 = [7,8,9]
let marge = new Array(arr1.length + arr2.length)
let i=j=k=0
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        marge[k++] = arr1[i++]
    }
    else{
        marge[k++] = arr2[j++]
    }
}
while(j<arr2.length){
    marge[k++] = arr2[j++]
}
while(i<arr1.length){
    marge[k++] = arr1[i++]
}
console.log(marge);






