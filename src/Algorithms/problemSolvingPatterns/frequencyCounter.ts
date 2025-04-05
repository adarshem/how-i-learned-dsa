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
