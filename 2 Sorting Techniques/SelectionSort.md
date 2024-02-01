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