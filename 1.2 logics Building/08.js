// *********
//  ******* 
//   *****  
//    ***   
//     *    




function reversePattern(n) {
    for (let i = n - 1; i >= 0; i--) {
      let row = '';
  
      for (let j = 0; j < n - i - 1; j++) {
        row += ' ';
      }
  
      for (let j = 0; j < 2 * i + 1; j++) {
        row += '*';
      }
  
      for (let j = 0; j < n - i - 1; j++) {
        row += ' ';
      }
  
      console.log(row);
    }
  }
  
  reversePattern(5);