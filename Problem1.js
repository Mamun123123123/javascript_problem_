let str = "Abdullah AL mamun"
let result = str.split(' ')
console.log(result);
 let max = result[0]
for(let i=1;i<result.length;i++){
   
    if(max.length <result[i].length){
        max = result[i]
    }

}
console.log(max);


