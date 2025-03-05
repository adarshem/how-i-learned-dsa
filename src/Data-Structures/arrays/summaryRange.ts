function summaryRanges(nums: number[]): string[] {
  if (!nums.length) return [];

  let start = nums[0];
  let end = nums[0];
  const result = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 === nums[i - 1]) {
      end = nums[i];
      console.log(start, end);
    } else {
      result.push(start === end ? `${start}` : `${start}->${end}`);
      start = nums[i];
      end = nums[i];
    }
  }

  result.push(start === end ? `${start}` : `${start}->${end}`);

  return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // Output: ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // Output: ["0","2->4","6","8->9"]
console.log(summaryRanges([])); // Output: []
console.log(summaryRanges([-1])); // Output: ["-1"]
console.log(summaryRanges([0])); // Output: ["0"]
console.log(summaryRanges([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: ["0->9"]
