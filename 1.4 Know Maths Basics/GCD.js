// Brute force solution to find GCD using a loop.
// Time complexity: O(min(num1, num2))
// The loop iterates up to the minimum of num1 and num2.
function GCD(num1, num2) {
    let num = Math.min(num1, num2);
    let temp = 0;
    for (let i = 2; i <= num; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            temp = Math.max(temp, i);
        }
    }
    return temp;
}

console.log(GCD(12, 18));



// Optimal solution using Euclid's Algorithm to find GCD.
// Time complexity: O(log(min(num1, num2)))
// The Euclidean algorithm has logarithmic time complexity.
function Euclid_Algorithm(num1, num2) {
    let temp = 0;
    while (num2 != 0) {
        temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return temp;
}

console.log(Euclid_Algorithm(12, 18));
6