//iterative
function SumAllfirst(n){
    let sum=0;
    for(let i=1;i<=n;i++){
      sum+=i
    }
  console.log(sum)
  }
  
  
  SumAllfirst(10)
  
  
  //recursion
  function sumAllFirstN(n, i = 1, sum = 0) {
      if (i <= n) {
          sum += i;
          i++;
          return sumAllFirstN(n, i, sum);
      }
      return sum;
  }
  
  console.log(sumAllFirstN(10));
  