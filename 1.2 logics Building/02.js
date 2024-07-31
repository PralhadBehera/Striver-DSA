// * 
// * * 
// * * *
// * * * *
// * * * * *
// * * * * * *

function pattern2(n) {
    for(let i=1;i<=n;i++){
      let row='';
      for(let j=1;j<=i;j++){
        row+='* '
      }
      console.log(row)
    }
    }
    pattern2(5)