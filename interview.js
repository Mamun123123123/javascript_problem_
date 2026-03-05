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

let arr = [10,12,18,6,4]
let sum = 0
for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j] === 30){
          console.log( arr[i],arr[j]);
          
        }
      }
}
 


