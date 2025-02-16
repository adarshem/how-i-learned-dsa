export function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

export function removeDuplicatesWithSet(nums: number[]): number {
  const set = new Set<number>(nums);
  const uniqueArray = Array.from(set);
  return uniqueArray.length;
}
