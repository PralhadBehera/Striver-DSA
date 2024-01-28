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

// 2nd 

function fibonacci(num, i = 1, num1 = 0, num2 = 1) {
    if (i <= num) {
        let fibo = num1 + num2;
        console.log(fibo);
        num1 = num2;
        num2 = fibo;
        i++;
        fibonacci(num, i, num1, num2);
    }
}

console.log("0");
console.log("1");
fibonacci(5);







