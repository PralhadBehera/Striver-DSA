function printPattern(rows) {
   

    for (let i = 1; i <= rows; i++) {
        let line = '';

        // Print increasing stars
        for (let j = 1; j <= i; j++) {
            line += '*';
        }

        // Add spaces
        for (let k = 2 * (rows - i); k > 0; k--) {
            line += ' ';
        }

        // Print decreasing stars
        for (let l = 1; l <= i; l++) {
            line += '*';
        }

        console.log(line);
    }
     for (let i = rows; i >= 1; i--) {
        let line = '';
        
        // Print decreasing stars
        for (let j = i; j > 0; j--) {
            line += '*';
        }
        
        // Add spaces
        for (let k = 2 * (rows - i); k > 0; k--) {
            line += ' ';
        }
        
        // Print increasing stars
        for (let l = i; l > 0; l--) {
            line += '*';
        }
        
        console.log(line);
    }
}

// Test with 6 rows
printPattern(6);

// Output 

// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *