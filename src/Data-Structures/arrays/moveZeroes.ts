export default function moveZeroes(nums: number[]): void {
  let lastNonZeroFoundAt = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap elements if the current element is non-zero
      [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
      lastNonZeroFoundAt++;
    }
  }
}

const nums = [0, 1, 2, 0, 3, 12, 0];
moveZeroes(nums);
console.log(nums); // Output: [1, 2, 3, 12, 0, 0, 0]
