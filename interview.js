// console.log([]==![]);
// console.log([] == []);

// console.log(typeof null);
// console.log(typeof undefined);

// function a(){
//     return 
//     {
//         name:"mamun"
//     }
// }
// console.log(a());

// let arr = [10,12,18,6,4]
// let sum = 0
// for(let i=0;i<arr.length;i++){
//       for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j] === 30){
//           console.log(i,j);
//         }
//       }
// }
 
let arr = [1,2,3,4,8,6]
let max = arr[0]
let sc_max = arr[1]
for(let i=2;i<arr.length;i++){
    if(max<arr[i]){
        sc_max = max
        max = arr[i]
    }else if(arr[i] > sc_max && arr[i] != max){
        sc_max = arr[i];
    }
}
console.log(max*sc_max);



