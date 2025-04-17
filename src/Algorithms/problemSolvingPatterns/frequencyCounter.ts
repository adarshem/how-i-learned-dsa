// A function that takes two strings and it returns true if the strings are anagrams of one another
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

export function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  // Create a frequency counter for each string
  const frequenceyCounter1: { [key: string]: number } = {};
  const frequenceyCounter2: { [key: string]: number } = {};

  for (const char of str1) {
    frequenceyCounter1[char] = (frequenceyCounter1[char] || 0) + 1;
  }

  for (const char of str2) {
    frequenceyCounter2[char] = (frequenceyCounter2[char] || 0) + 1;
  }

  // Compare the frequency counters
  for (const key in frequenceyCounter1) {
    if (frequenceyCounter1[key] !== frequenceyCounter2[key]) {
      return false;
    }
  }
  return true;
}

export function validAnagramOptimized(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  // Create a frequency counter for the first string
  const frequenceyCounter: { [key: string]: number } = {};

  for (const char of str1) {
    frequenceyCounter[char] = (frequenceyCounter[char] || 0) + 1;
  }

  // Decrease the count for each character in the second string
  for (const char of str2) {
    if (!frequenceyCounter[char]) {
      return false;
    }
    frequenceyCounter[char] -= 1;
  }

  return true;
}

export function areThereDuplicates(...args: number[]): boolean {
  const frequencyCounter: { [key: number]: number } = {};

  for (const arg of args) {
    frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
    if (frequencyCounter[arg] > 1) return true;
  }
  return false;
}

export function constructNote(message: string, letters: string): boolean {
  const letterFrequency: { [key: string]: number } = {};

  for (const letter of letters) {
    letterFrequency[letter] = (letterFrequency[letter] || 0) + 1;
  }

  for (const char of message) {
    if (!letterFrequency[char]) {
      return false;
    }
    letterFrequency[char] -= 1;
  }
  return true;
}

export function findAllDuplicates(nums: number[]): number[] {
  const frequencyCounter: { [key: string]: number } = {};
  const duplicateNums = [];

  for (const num of nums) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    if (frequencyCounter[num] === 2) {
      duplicateNums.push(num);
    }
  }
  return duplicateNums;
}
