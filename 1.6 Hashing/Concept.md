
## Hashmap

In JavaScript, a hashmap (also known as an associative array or an object) is a data structure that allows you to store key-value pairs. The keys in a hashmap can be any value (including objects and functions), while the values can be any data type.

/// Define a function named countOccurrences that takes an array as an argument
function countOccurrences(arr) {
  // Create an empty hash map to store element counts
  const hashMap = {};

  // Iterate over the array using a for loop
  for (let i = 0; i < arr.length; i++) {
    // Retrieve the current element from the array
    const element = arr[i];

    // Check if the element is already a key in the hash map
    if (hashMap[element] === undefined) {
      // If not, initialize its count to 1
      hashMap[element] = 1;
    } else {
      // If yes, increment its count
      hashMap[element]++;
    }
  }

  // Iterate over the keys in the hash map using another for loop
  for (let key in hashMap) {
    // Print the element and its count
    console.log(`${key}: ${hashMap[key]} times`);
  }
}

// Example usage
const numbers = [1, 2, 1, 3, 2, 4, 1, 4, 5];
// Call the countOccurrences function with the example array
countOccurrences(numbers);
