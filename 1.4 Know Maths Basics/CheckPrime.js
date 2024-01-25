// 1st Approach
function PrimeNumber(num) {
    if (num <= 1) {
        return "It's not a prime number";
    }

    let n = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= n; i++) {
        if (num % i === 0) {
            return "It's not a prime number";
        }
    }

    return "It's a prime number";
}

console.log(PrimeNumber(11));
