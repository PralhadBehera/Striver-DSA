// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

function pattern2(n) {
    for(let i=1;i<=n;i++){
      let row='';
      for(let j=1;j<=i;j++){
        row+=j+' '
      }
      console.log(row)
    }
    }
    pattern2(5)