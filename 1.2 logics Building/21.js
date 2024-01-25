// Function to print a rectangular pattern with an inner rectangle
function printPattern(rows) {
    // Outer loop for each row
    for (let i = 1; i <= rows; i++) {
        let line = '';
        
        // Inner loop for each column in the row
        for (let j = 1; j <= rows; j++) {
            // Check if the current position is on the outer boundary
            if (i === 1 || i === rows || j === 1 || j === rows) {
                // If on the boundary, print an asterisk
                line += '*';
            } else {
                // If inside the boundary, print a space
                line += ' ';
            }
        }
        
        // Print the line for the current row
        console.log(line);
    }
}

// Test with 5 rows
printPattern(5);


output

// *****
// *   *
// *   *
// *   *
// *****