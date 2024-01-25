function ArmStrong(num) {
    let n = num;
    let rem = 0, armstrong = 0;
    while (num > 0) {
        rem = num % 10;
        armstrong +=rem*rem*rem;
        num = Math.floor(num / 10);
    }
    if (n == armstrong) {
        return "It's an Armstrong number";
    } else {
        return "It's not an Armstrong number";
    }
}

console.log(ArmStrong(153));
