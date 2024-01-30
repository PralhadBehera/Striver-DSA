//1st Approach

function Divisor(num){
   let n=math.floor(num/2);
    for(let i=1;i<=n;i++){
     if(num%i==0){
       console.log(i)
     }
    }
}


Divisor(10)

//2nd Approach

function AllDivisor(num){
    let n=Math.sqrt(num);
    for(let i=1;i<=n;i++){
        if(num%i==0){
            console.log(i);
            if(i!=num%i){
                console.log(num%i)
            }
        }
        
    
    }
}

AllDivisor(10)



//Recursive Approach

function divisor(num, i = 1, n = Math.sqrt(num)) {
  if (i <= n) {
    if (num % i === 0) {
      console.log(i);
      if (i !== num / i) {
        console.log(num / i);
      }
    }
   i++;
    return divisor(num, i, n);
  }
}

divisor(12);