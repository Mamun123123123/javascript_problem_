let arr = [1,2,3,4,5,6,7,8,9,10]
function sum_Of_array(arr){
    // console.log(arr);
    return arr.reduce((item,sum)=>item+sum,0)
}
console.log(sum_Of_array(arr))