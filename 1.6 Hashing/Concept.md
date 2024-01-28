
## Hashmap

In JavaScript, a hashmap (also known as an associative array or an object) is a data structure that allows you to store key-value pairs. The keys in a hashmap can be any value (including objects and functions), while the values can be any data type.

```javascript
// Define a function named countOccurrences that takes an array as an argument
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

```

## Character Hashing

In the context of hashing algorithms, character hashing involves converting a character or a sequence of characters into a numerical representation. This numerical representation is often used as an index or key in hash tables or hash maps.

### Assigning Numeric Values

Each character is assigned a unique numeric value. This can be done using various schemes, such as ASCII values, Unicode values, or a custom mapping.

### Hash Function

A hash function is applied to the numeric representation to generate a hash code. The hash code is the final result of the character hashing process.

```javascript 

function countCharacters(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if the character is already in the hashmap
    if (charCount[char]) {
      // Increment count if exists
      charCount[char]++;
    } else {
      // Initialize count if not exists
      charCount[char] = 1;
    }
  }

  return charCount;
}

// Example usage
const inputString = "programming";
const charOccurrences = countCharacters(inputString);

console.log("Character occurrences:");
for (let char in charOccurrences) {
  console.log(`${char}: ${charOccurrences[char]}`);
}


```
## Numeric Hashing 
 **Numeric Hashing** is same as **Normal Hashing Map**