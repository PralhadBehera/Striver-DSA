
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
 **_Numeric Hashing_** is same as **_Normal Hashing Map_**

 ## Map

In JavaScript, the Map object is a built-in collection that allows you to store key-value pairs where both the keys and values can be of any type

### Methods


set(key, value): Adds a new key-value pair to the map.
```javascript 
let myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 25);

```

get(key): Returns the value associated with the specified key.
```javascript 
get(key): Returns the value associated with the specified key.
```

has(key): Returns a boolean indicating whether the specified key exists in the map.
```javascript 
console.log(myMap.has('age')); // Output: true
```
delete(key): Removes the specified key and its associated value from the map.
```javascript 
myMap.delete('age');
```
clear(): Removes all key-value pairs from the map.
```javascript 
myMap.clear();
```
size: Returns the number of key-value pairs in the map.
```javascript 
console.log(myMap.size); // Output: 1
```
keys(): Returns an iterator over the keys in the map.
```javascript 
for (let key of myMap.keys()) {
  console.log(key);
}
```

values(): Returns an iterator over the values in the map.
```javascript 
for (let key of myMap.keys()) {
  console.log(key);
}
  ```
entries(): Returns an iterator over the key-value pairs in the map.
```javascript 
for (let [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}
```

## Code

```javascript 
function countOccurrences(arr) {
  // Create a Map to store the count of each element
  let occurrencesMap = new Map();

  // Iterate through the array
  for (let element of arr) {
    // If the element is already in the Map, increment its count
    if (occurrencesMap.has(element)) {
      occurrencesMap.set(element, occurrencesMap.get(element) + 1);
    } else {
      // If the element is not in the Map, add it with count 1
      occurrencesMap.set(element, 1);
    }
  }

  // Display the count of occurrences
  for (let [element, count] of occurrencesMap) {
    console.log(`${element} occurs ${count} times`);
  }
}

// Example usage
let myArray = [1, 2, 1, 3, 2];
countOccurrences(myArray);
```
## Difference between the hashmap and map

![Alt text](image.png)