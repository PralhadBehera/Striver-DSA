//

function PowerFunction(base,exponent){
    let result=1;
for(let i=1;i<=exponent;i++){
    result*=base;
}
return result;
}

console.log(PowerFunction(2,2))

//iteration

function powerIterative(base, exponent) {
    return exponent===0? 1:base*=powerIterative(base,exponent-1)
   }
   
   console.log(powerIterative(2,2))