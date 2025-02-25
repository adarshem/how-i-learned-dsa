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

// Imagine you picked a number from 1 - 100 and asked your friend to guess the number you were thinking of. There are three outcomes. Either their guess is correct, too small or too large.

// After every guess, you would tell them if their guess was correct, too small or too large. Your friend would then adjust their next guess accordingly.
export function searchRange(low: number, high: number): number {
  const isGuessCorrect = (guess: number) => {
    if (guess > 10) {
      return 1; // Too high
    } else if (guess < 10) {
      return -1; // Too low
    }
    return 0; // Correct
  };

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    const result = isGuessCorrect(mid);
    if (result === 0) {
      return mid;
    } else if (result === 1) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
