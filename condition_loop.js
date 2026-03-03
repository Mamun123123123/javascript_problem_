 let age = 17
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
let n =20;
if(isNaN(n)){
    console.log("Invalid Input");
}else{
    if(n>0){
        let sum = 0
        for(let i = 1;i<=n;i++){
            sum +=i
        }
        console.log(sum);
    }else{
        console.log("please give positive value or more than 0");
        
    }
}

//sum of factorial number 
let m = 5 ;
if(isNaN(n)){
    console.log("Invalid Input");
}else{
    if(m>0){
        let fact = 1
        for(let i = 1;i<=m;i++){
            fact = fact * i
        }
        console.log(fact);
    }else{
        console.log("please give positive value or more than 0");
        
    }
}
