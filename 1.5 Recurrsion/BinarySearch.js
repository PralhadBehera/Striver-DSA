function BinarySearch(arr, target, start = 0, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);

    if (start > end) {
        return -1; // Target not found
    } else if (arr[mid] === target) {
        return mid; // Target found, return index
    } else if (arr[mid] > target) {
        return BinarySearch(arr, target, start, mid - 1);
    } else {
        return BinarySearch(arr, target, mid + 1, end);
    }
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
console.log(BinarySearch(arr, target)); // Output: 4 (index of target in the array)
