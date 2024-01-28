//iterative

function CheckPalindrome(num) {
    let n = num;
    let rem = 0;
    let res = 0;

    while (n > 0) {
        rem = n % 10;
        res = res * 10 + rem;
        n = Math.floor(n / 10);
    }

    if (res === num) {
        return `${num} is a Palindrome Number`;
    } else {
        return `${num} is not a Palindrome Number`;
    }
}

console.log(CheckPalindrome(101));

//recursive

function ChckPalindrome(num,rem=0,res=0){
  let n=num;
  if(n>0){
        rem = n % 10;
        res = res * 10 + rem;
        n = Math.floor(n / 10);
        ChckPalindrome(n,rem,res)
  }
  if(res===num){
    return `${num} it's a palindrome`
  }
  else{
      return `${num} is not a palindrome`
  }
}

console.log(ChckPalindrome(10))

//leetcode 
var isPalindrome = function(s) {
    // Step 1: Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Check if the cleaned string is a palindrome
    return cleanedString === cleanedString.split('').reverse().join('');
};

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome("121")); // Output: true


