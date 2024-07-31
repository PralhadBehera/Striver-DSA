//     *    
//    ***   
//   *****  
//  ******* 
// *********



function pattern(n){
    for(let i=0;i<n;i++){
      let row='';
      for(j=0;j<n-i-1;j++){
        row+=' '; //space
      }
       for(j=0;j<2*i+1;j++){
        row+='*'; //star
      }
      
       for(j=0;j<n-i-1;j++){
        row+=' '; //space
      }
      console.log(row)
    }
  }
  
  
  pattern(5)