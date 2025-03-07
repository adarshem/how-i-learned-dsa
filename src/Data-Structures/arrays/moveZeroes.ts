function moveZeroes(nums: number[]): number[] {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  return nums;
}

console.log(moveZeroes([0, 1, 2, 0, 3, 12, 0])); // Output: [1, 3, 12, 0, 0]
