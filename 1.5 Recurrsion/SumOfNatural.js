//iterative
function SumNatural(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(SumNatural(5))

//Recurrsion

function sumNatural(n) {
    return n === 0 ? 0 : n + sumNatural(n - 1);
}

console.log(sumNatural(5));
