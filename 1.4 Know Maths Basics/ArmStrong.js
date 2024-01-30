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

//recursive approch 


function Armstrong (n,res=0){
    if(n>0){
      let rem=0;
      rem=n%10;
      res+=rem*rem*rem;
      n=Math.floor(n/10);
      return Armstrong(n,res)
    }
    return res;
  }
   
   
   let res=Armstrong(153)
   console.log(res)
   if(res===153){
     console.log("Armstrong")
   }else{
     console.log("not Armstrong")
   }
