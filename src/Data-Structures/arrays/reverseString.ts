// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
export function reverseString(input: string[]): string[] {
  for (let i = 0; i < input.length / 2; i++) {
    let pointerA = input[i];
    let pointerB = input[input.length - 1 - i];
    input[i] = pointerB;
    input[input.length - 1 - i] = pointerA;
  }
  return input;
}

// JavaScript provides an array method .reverse() that does the same operation in-place.
// Higher readability and Faster performance due to native implementation
export function reverseStringUsingBuiltInMethod(input: string[]): string[] {
  return input.reverse(); // Built-in method
}

// Another way
// export function reverseString(input: string[]): void {
//   let left = 0, right = input.length - 1;
//   while (left < right) {
//     [input[left], input[right]] = [input[right], input[left]]; // Swap
//     left++;
//     right--;
//   }
// }
