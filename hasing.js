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

// for(let i=0;i<arr.length;i++){
//     if(set.has(arr[i])){
//         set.delete(arr[i])
//     }else{
//         set.add(arr[i])
//     }
// }
// console.log(set);

// let str = "mamun"

// for(let i =0;i<str.length;i++){
//     if(!set.has(str[i])){
//         set.add(str[i])
//     }
// }
// console.log(set);



let map = new Map()

// map.set("name","mamun")
//  console.log(map);
 
for(let i=0;i<arr.length;i++){
    // if(map.has(arr[i])){
    //     map.set(arr[i],map.get(arr[i]) + 1)
    // }else{
    //     map.set(arr[i],1)
    // }
    map.set(arr[i],(map.get(arr[i]),0) + 1)
}
console.log(map);

let result = {}
for(let i =0 ;i<arr.length;i++){
    if(result[arr[i]]){
        result[arr[i]]++
    }else{
        result[arr[i]] = 1
    }
}
console.log(result);

