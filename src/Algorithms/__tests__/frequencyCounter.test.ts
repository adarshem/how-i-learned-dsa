import {
  validAnagram,
  validAnagramOptimized,
  areThereDuplicates,
  constructNote,
  findAllDuplicates
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

describe('areThereDuplicates', () => {
  it('should return true for duplicates', () => {
    expect(areThereDuplicates(1, 2, 3, 1)).toBe(true);
    expect(areThereDuplicates(1, 2, 2, 3)).toBe(true);
    expect(areThereDuplicates(1, 1, 1)).toBe(true);
  });

  it('should return false for no duplicates', () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
    expect(areThereDuplicates(1, 2, 3, 4)).toBe(false);
    expect(areThereDuplicates()).toBe(false);
  });
});

describe('constructNote', () => {
  it('should return true if the note can be constructed', () => {
    expect(constructNote('abc', 'aabbcc')).toBe(true);
    expect(constructNote('hello', 'oellh')).toBe(true);
    expect(constructNote('note', 'notetaker')).toBe(true);
  });

  it('should return false if the note cannot be constructed', () => {
    expect(constructNote('hello', 'world')).toBe(false);
    expect(constructNote('abc', 'def')).toBe(false);
    expect(constructNote('note', 'notetake')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(constructNote('', '')).toBe(true);
    expect(constructNote('', 'a')).toBe(false);
  });
});

describe('findAllDuplicates', () => {
  it('should return an array of duplicates', () => {
    expect(findAllDuplicates([1, 2, 3, 1])).toEqual([1]);
    expect(findAllDuplicates([1, 2, 2, 3])).toEqual([2]);
    expect(findAllDuplicates([1, 1, 1])).toEqual([1]);
    expect(findAllDuplicates([1, 2, 3, 4])).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(findAllDuplicates([])).toEqual([]);
  });
});
