// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// 1234
// pop 4 add 1
// if result < 10 -> push(result)
//

// Time Complexity: (O(n))
// Space Complexity: (O(n))

export function plusOne(digits: number[]): number[] {
  if (digits?.length === 0) return [];

  if (digits?.length === 1 && digits[0] === 9) {
    digits[0] = 1;
    digits.push(0);
    return digits;
  }

  let lastDigitplusOne = (digits.pop() || 0) + 1;

  if (lastDigitplusOne < 10) {
    digits.push(lastDigitplusOne);
    return digits;
  }

  plusOne(digits);
  digits.push(0);
  return digits;
}

console.log(plusOne([1, 2, 3, 4]));
console.log(plusOne([1, 2, 3, 9]));
console.log(plusOne([9, 9, 9, 9]));
console.log(plusOne([9, 0, 9, 9]));

// Space complexity is reduced to O(1)
export function plusOneImproved(input: number[]): number[] {
  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] < 9) {
      input[i]++;
      return input;
    }
    input[i] = 0;
  }

  // This is to take care of the cases like [9,9] where the above loop would return [0,0]
  if (input[0] === 0) {
    input[0] = 1;
    input.push(0);
    return input;
  }

  return input;
}

console.log(plusOneImproved([9, 8, 9, 9]));
console.log(plusOneImproved([9, 9, 9, 9]));
