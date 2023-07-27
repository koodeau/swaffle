/**
 * Performs a Binary Search on a sorted array to find the index of a given number.
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} num - The number to find in the array.
 * @returns {number} - The index of the found number, or -1 if the number is not present in the array.
 */
export const binarySearch = (arr, num) => {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const middle = Math.floor(low + (high - low) / 2)
    if (num === arr[middle]) {
      return middle
    }
    if (num > arr[middle]) {
      low = middle + 1
    } else {
      high = middle - 1
    }
  }
  return -1
}
