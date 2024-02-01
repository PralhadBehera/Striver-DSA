# **Selection Sort**

```javascript 

// Function to perform Selection Sort on an array
function selectionSort(arr) {
  // Outer loop for iterating over each element in the array
  for (let i = 0; i <= arr.length - 1; i++) {
    // Inner loop for comparing the current element with the rest of the array
    for (let j = i + 1; j <= arr.length - 1; j++) {
      // Check if the element at index j is smaller than the element at index i
      if (arr[j] < arr[i]) {
        // Swap the elements if the condition is true
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  // Return the sorted array
  return arr;
}

// Example usage
let arr = [1, 4, 2, 7, 10];
let sortedArray = selectionSort(arr);
console.log(sortedArray);
```

### Explaination

**Here's a mathematical example of Selection Sort using the array `[1, 4, 2, 7, 10]`:**

**Iteration 1 (i = 0):**

- Outer loop starts with `i = 0`, representing the first element (1).
- Inner loop iterates from `j = 1` to `4`:
  - Compares 1 with 4, no swap needed (1 <= 4).
  - Compares 1 with 2, swaps 1 and 2 to get `[2, 4, 1, 7, 10]`.
  - Compares 1 (now at index 2) with 7 and 10, no swaps needed.
- Array after iteration 1: `[2, 4, 1, 7, 10]`

**Iteration 2 (i = 1):**

- Outer loop moves to `i = 1`, representing the second element (4).
- Inner loop iterates from `j = 2` to `4`:
  - Compares 4 with 1, swaps 4 and 1 to get `[2, 1, 4, 7, 10]`.
  - Compares 4 (now at index 2) with 7 and 10, no swaps needed.
- Array after iteration 2: `[2, 1, 4, 7, 10]`

**Iterations 3 and 4 (i = 2 and i = 3):**

- Similar process repeats for `i = 2` and `i = 3`.
- Array after iteration 4: `[2, 1, 4, 7, 10]` (already sorted)

**Iteration 5 (i = 4):**

- Outer loop reaches `i = 4`, but the inner loop doesn't execute as `arr.length - 1 = 4`.
- Array remains sorted: `[2, 1, 4, 7, 10]`

**Sorted Array:**

- Final sorted array: `[1, 2, 4, 7, 10]`
