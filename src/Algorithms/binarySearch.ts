/**
 * Search for a target in a sorted array. If the target is found, return the index. If not, return -1.
 * @param nums - a sorted array of distinct integers
 * @param target
 * @returns
 */
export default function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
