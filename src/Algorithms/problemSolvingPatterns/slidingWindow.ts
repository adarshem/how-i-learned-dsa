export function maxSubArraySum(arr: number[], num: number): number {
  if (num <= 0 || arr.length === 0 || arr.length < num) return 0;
  let maxSum = 0;
  let tempSum = -Infinity;

  // Calculate the sum of the first 'num' elements
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // Store it as the maximum sum
  tempSum = maxSum;

  // Slide the window over the rest of the array
  for (let i = num; i < arr.length; i++) {
    // Subtract the element going out of the window and add the new element coming into the window
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Example usage
const arr = [1, 2, 5, 2, 8, 1, 5];
const num = 2;
const result = maxSubArraySum(arr, num);
console.log(result); // Output: 10 (8 + 2)
