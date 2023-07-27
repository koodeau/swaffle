/**
 * Sorts an array of numbers using the Merge Sort algorithm.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
export const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

/**
 * Merges two sorted arrays into a single sorted array.
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @returns {number[]} - The merged and sorted array.
 */
function merge(arr1, arr2) {
  const result = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}
