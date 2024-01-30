function CheckPalindrome(num){
    let n=num;
    let rem=0,res=0;
    while(num>0){
        rem=num%10;
        res=res*10+rem;
        num = Math.floor(num / 10);
    }
     if(n===res){
        return " its a Palindrome number";
     }
     else{
        return "its not a palindrome number "
     }


   }
console.log(CheckPalindrome(121));
