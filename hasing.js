let set = new Set()
// set.add(2)
// set.add(4)
// set.add(3)
// console.log(set);
// console.log(set.has(2));
// console.log(set.size);
// set.delete(2)
// console.log(set);

// for (const a of set) {
//          console.log(a);
             
// }


let arr = [1,2,4,1,2,4,3,3,1,7,7]
// for(let i=0;i<arr.length;i++){
//         if(!set.has(arr[i])){
//                set.add(arr[i])
//         }
// }
// console.log(set);

for(let i=0;i<arr.length;i++){
    if(set.has(arr[i])){
        set.delete(arr[i])
    }else{
        set.add(arr[i])
    }
}
console.log(set);


