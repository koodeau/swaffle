/**
 * Performs a Linear Search on an array to find the index of a given number.
 * @param {number[]} arr - The array to search in.
 * @param {number} number - The number to find in the array.
 * @returns {number} - The index of the found number, or -1 if the number is not present in the array.
 */
export const linearSearch = (arr, number) => {
  if (arr.length < 1) return -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) return i
  }
  return -1
}
