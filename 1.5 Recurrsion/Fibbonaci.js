// iterative

function Fibonaci(n){
    let a=0,b=1;
    for(let i=0;i<=n;i++){
      let temp=0;
      temp = a+b;
      a=b;
      b=temp;
    }
    return b;
}

console.log(Fibonaci(5))
// Recurrsion
function fibo(n) {
    return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));
