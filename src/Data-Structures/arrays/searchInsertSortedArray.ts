// // Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// // You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Approach: Binary Search
// 1. Initialize left = 0 and right = nums.length - 1
// 2. Iterate while left <= right
// 3. Calculate mid = left + Math.floor((right - left) / 2)
// 4. If nums[mid] === target, return mid
// 5. If nums[mid] < target, set left = mid + 1
// 6. If nums[mid] > target, set right = mid - 1
// 7. Return left

export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  //   Returning left after the while loop ensures that the function provides the correct index where the target should be inserted if it is not found in the array.
  return left;
}

// Complexity Analysis
// Time Complexity: O(log n)
// Space Complexity: O(1)
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 9)); // 4
