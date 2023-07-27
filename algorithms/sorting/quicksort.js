/**
 * Swaps two elements in an array.
 * @param {number[]} array - The array where elements should be swapped.
 * @param {number} i - Index of the first element to be swapped.
 * @param {number} j - Index of the second element to be swapped.
 */
function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

/**
 * Partitions the array based on a pivot element.
 * @param {number[]} array - The array to be partitioned.
 * @param {number} start - The start index of the partition.
 * @param {number} end - The end index of the partition.
 * @returns {number} - The index of the pivot element after partitioning.
 */
function partition(array, start = 0, end = array.length - 1) {
  let pivot = array[start]
  let swapIndex = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex++
      swap(array, swapIndex, i)
    }
  }

  swap(array, start, swapIndex)
  return swapIndex
}

/**
 * Sorts an array of numbers using the Quick Sort algorithm.
 * @param {number[]} arr - The array to be sorted.
 * @param {number} left - The left index of the subarray to be sorted (default is 0).
 * @param {number} right - The right index of the subarray to be sorted (default is the last index).
 * @returns {number[]} - The sorted array.
 */
export const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = partition(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}
