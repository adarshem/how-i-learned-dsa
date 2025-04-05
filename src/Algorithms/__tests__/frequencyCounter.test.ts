import {
  validAnagram,
  validAnagramOptimized
} from '../problemSolvingPatterns/frequencyCounter';

describe('validAnagram', () => {
  it('should return true for anagrams', () => {
    expect(validAnagram('listen', 'silent')).toBe(true);
    expect(validAnagram('triangle', 'integral')).toBe(true);
    expect(validAnagram('evil', 'vile')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(validAnagram('hello', 'world')).toBe(false);
    expect(validAnagram('abc', 'def')).toBe(false);
    expect(validAnagram('rat', 'car')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(validAnagram('', '')).toBe(true);
    expect(validAnagram('', 'a')).toBe(false);
  });

  it('should handle strings with different lengths', () => {
    expect(validAnagram('abc', 'ab')).toBe(false);
    expect(validAnagram('abcd', 'abcde')).toBe(false);
  });
});

describe('validAnagramOptimized', () => {
  it('should return true for anagrams', () => {
    expect(validAnagramOptimized('listen', 'silent')).toBe(true);
    expect(validAnagramOptimized('triangle', 'integral')).toBe(true);
    expect(validAnagramOptimized('evil', 'vile')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(validAnagramOptimized('hello', 'world')).toBe(false);
    expect(validAnagramOptimized('abc', 'def')).toBe(false);
    expect(validAnagramOptimized('rat', 'car')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(validAnagramOptimized('', '')).toBe(true);
    expect(validAnagramOptimized('', 'a')).toBe(false);
  });

  it('should handle strings with different lengths', () => {
    expect(validAnagramOptimized('abc', 'ab')).toBe(false);
    expect(validAnagramOptimized('abcd', 'abcde')).toBe(false);
  });
});
