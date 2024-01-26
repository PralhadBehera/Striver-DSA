//with iteraive

function factorial(num){
    let fact=1;
    for(let i=num;i>=1;i--){
        fact*=i;
    }
    return fact ;

}

console.log(factorial(10))


/// with recurrsion

function fact(n){
    if(n===0 || n===1){
return 1;
    }
else{
    return n*fact(n-1);
} 
    
}

console.log(fact(5))