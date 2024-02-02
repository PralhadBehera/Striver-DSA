```javascript
function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(
    Array.prototype.slice.call(left, leftIndex),
    Array.prototype.slice.call(right, rightIndex)
  );
}

const arrayToSort = [8, 3, 5, 1, 9, 2, 7, 4, 6];
const sortedArray = mergesort(arrayToSort);
console.log(sortedArray);```