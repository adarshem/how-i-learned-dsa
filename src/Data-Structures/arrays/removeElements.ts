export function removeElements(nums: number[], val: number): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  // nums.length = i; // This line is not needed. I wanted to see how we can return an array with the length of i.
  return i;
}

export function removeElementsUsingFilter(nums: number[], val: number): number {
  const newArr = nums.filter((ele) => ele !== val);
  return newArr.length;
}
