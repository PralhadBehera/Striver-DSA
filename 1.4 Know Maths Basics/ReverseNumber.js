function reverseNumber(num){
    let rem=0,res=0;
    while(num>0){
        rem=num%10;
        res=res*10+rem;
        num=Math.floor(num/10);
    }
    return res;
    }
    
    console.log(reverseNumber(123))