function pattern22(n) {
    // Outer loop for no. of rows
    for (let i = 0; i < 2 * n - 1; i++) {
        let line = '';

        // inner loop for no. of columns.
        for (let j = 0; j < 2 * n - 1; j++) {
            // Initialising the top, down, left, and right indices of a cell.
            let top = i;
            let bottom = j;
            let right = (2 * n - 2) - j;
            let left = (2 * n - 2) - i;

            // Min of 4 directions and then we subtract from n
            // because previously we would get a pattern whose border
            // has 0's, but we want with border N's and then decreasing inside.
            line += n - Math.min(Math.min(top, bottom), Math.min(left, right)) + ' ';
        }

        // As soon as the numbers for each iteration are printed, we move to the
        // next row and give a line break otherwise all numbers
        // would get printed in 1 line.
        console.log(line);
    }
}

// Example: Call the function with N = 5
pattern22(5);

output

// 5 5 5 5 5 5 5 5 5 
// 5 4 4 4 4 4 4 4 5 
// 5 4 3 3 3 3 3 4 5 
// 5 4 3 2 2 2 3 4 5 
// 5 4 3 2 1 2 3 4 5 
// 5 4 3 2 2 2 3 4 5 
// 5 4 3 3 3 3 3 4 5 
// 5 4 4 4 4 4 4 4 5 
// 5 5 5 5 5 5 5 5 5 