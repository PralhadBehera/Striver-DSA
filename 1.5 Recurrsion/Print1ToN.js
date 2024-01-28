
//iterative
function print(n){
    for(let i=1;i<=n;i++){
      console.log(i)
    }
  }
  print(10)
  


//recursive
  function print(n,i=1){
    if(i<=n){
      console.log(i);
        i++;
        print(n,i);
    }
  }
  print(10)