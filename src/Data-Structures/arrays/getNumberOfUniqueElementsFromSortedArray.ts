// - Two-Pointer Approach
// Time Complexity: O(n) - Linear time. The for loop iterates through the array once.
//  - All operations inside the loop are constant time.
// Space Complexity: O(1) - Constant space.  This approach modifies the input array in-place.
//  - It only uses a few extra variables (i, j), and their space usage doesn't depend on the size of the input array.
//  - This is very memory-efficient.
export function getNumberOfUniqueElements(nums: number[]): number {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

// Set approach:
// Time Complexity: O(n) - Linear time.
// - The creation of the Set from the nums array takes O(n) time because it needs to iterate through all the elements. Converting the set to an array also takes O(n) time.
// Space Complexity: O(n) - Linear space.
// - In the worst-case scenario (all elements are unique), the Set will store all n elements.
export function getNumberOfUniqueElementsUsingSet(nums: number[]): number {
  const set = new Set<number>(nums);
  return set.size;
}
