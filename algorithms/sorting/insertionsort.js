/**
 * Sorts an array of numbers using the Insertion Sort algorithm.
 * @param {number[]} nums - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
export const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let temp = nums[i]
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = temp
  }
  return nums
}
