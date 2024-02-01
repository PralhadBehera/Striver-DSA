# **Bubble Sort**
```javascript 

// Function to perform Bubble Sort on an array
function BubbleSort(arr) {
    // Outer loop for each pass
    for (let i = arr.length - 1; i >= 0; i--) {
        // Inner loop for comparisons and swaps
        for (let j = 0; j <= i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if necessary
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr; // Return the sorted array
}

let arr = [8, 3, 2, 10, 11];
let sortedArr = BubbleSort(arr);
console.log(sortedArr); // Print the sorted array

```


## **Explanation**

**Here's a mathematical example of Bubble Sort using the array `[8, 3, 2, 10, 11]`:**

**Iteration 1 (i = 4):**

- Outer loop starts with `i = 4` (index of the last element).
- Inner loop iterates from `j = 0` to `3`:
    - Compares 8 with 3, swaps them to get `[3, 8, 2, 10, 11]`.
    - Compares 8 with 2, swaps them to get `[3, 2, 8, 10, 11]`.
    - Compares 8 with 10, no swap needed.
    - Compares 10 with 11, no swap needed.
- Array after iteration 1: `[3, 2, 8, 10, 11]`

**Iteration 2 (i = 3):**

- Outer loop moves to `i = 3`.
- Inner loop iterates from `j = 0` to `2`:
    - Compares 3 with 2, swaps them to get `[2, 3, 8, 10, 11]`.
    - Compares 3 with 8, no swap needed.
    - Compares 8 with 10, no swap needed.
- Array after iteration 2: `[2, 3, 8, 10, 11]`

**Iteration 3 (i = 2):**

- Outer loop moves to `i = 2`.
- Inner loop iterates from `j = 0` to `1`:
    - Compares 2 with 3, no swap needed.
    - Compares 3 with 8, no swap needed.
- Array after iteration 3: `[2, 3, 8, 10, 11]` (already partially sorted)

**Iteration 4 (i = 1):**

- Outer loop moves to `i = 1`.
- Inner loop iterates only for `j = 0`:
    - Compares 2 with 3, no swap needed.
- Array after iteration 4: `[2, 3, 8, 10, 11]` (no changes)

**Iteration 5 (i = 0):**

- Outer loop reaches `i = 0`, the inner loop doesn't execute.
- Array remains sorted: `[2, 3, 8, 10, 11]`

**Sorted Array:**

- Final sorted array: `[2, 3, 8, 10, 11]`


