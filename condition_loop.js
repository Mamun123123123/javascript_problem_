 //let age = 17
//  if(isNaN(age)){
//       console.log("wrong");
//  }
//  else if(age >= 18)
//  {
//     console.log("you can vote");
//  }
//  else{
//     console.log("you can't vote");
//  }

//console.log(age>=18?"vote":"not");

//sum of n number
// let n =20;
// if(isNaN(n)){
//     console.log("Invalid Input");
// }else{
//     if(n>0){
//         let sum = 0
//         for(let i = 1;i<=n;i++){
//             sum +=i
//         }
//         console.log(sum);
//     }else{
//         console.log("please give positive value or more than 0");
        
//     }
// }

//sum of factorial number 
// let m = 5 ;
// if(isNaN(m)){
//     console.log("Invalid Input");
// }else{
//     if(m>0){
//         let fact = 1
//         for(let i = 1;i<=m;i++){
//             fact = fact * i
//         }
//         console.log(fact);
//     }else{
//         console.log("please give positive value or more than 0");
        
//     }
// }

//factors of number

// let k = 12 ;
// if(isNaN(k)){
//     console.log("Invalid Input");
// }else{
//     if(k>0){
//        for(let i=1;i<=k/2;i++){
//         if(k%i === 0){
//             console.log(i);
//         }
//        }
//        console.log(k);
//     }else{
//         console.log("please give positive value or more than 0");
        
//     }
// }

//prime number
// let l = 12 ;
// if(isNaN(l)){
//     console.log("Invalid Input");
// }else{
//     if(l>0){
    //    let prim_e = true
    //    for(let i =2;i<=Math.floor(l/2);i++){
    //     if(l%i === 0){
    //         prim_e = false
    //         break;
    //     }
    //console.log(isPrime(l));
    
       
    //    }
        // console.log(prim_e);
//     }else{
//         console.log("please give positive value or more than 0");
        
//     }
// }

// function isPrime(n){
//     if(n<=1) return false
//     if(n==2) return true
//     if(n%2==0) return false
//     for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
//         if(n%i == 0){
//             return false
//         }
//     }
//     return true
// }

//sum of digit 

let k = 12 ;
if(isNaN(k)){
    console.log("Invalid Input");
}else{
    if(k>0){
        let sum = 0
       while(k>0){
        let rem = k%10
        sum +=rem
        k = Math.floor(k/10)
       }
       console.log(sum);
       
    }else{
        console.log("please give positive value or more than 0");   
    }
}