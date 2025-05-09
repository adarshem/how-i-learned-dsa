import {
  averagePair,
  isSubsequence
} from '../problemSolvingPatterns/multiplePointers';

describe('averagePair', () => {
  test('should return true for average pair', () => {
    expect(averagePair([1, 2, 3], 2.5)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    expect(averagePair([], 4)).toBe(false);
  });
});
describe('isSubsequence', () => {
  test('should return true for valid subsequence', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true);
    expect(isSubsequence('sing', 'sting')).toBe(true);
    expect(isSubsequence('abc', 'abracadabra')).toBe(true);
  });

  test('should return false for invalid subsequence', () => {
    expect(isSubsequence('abc', 'acb')).toBe(false);
    expect(isSubsequence('', 'abc')).toBe(true); // Empty string is a subsequence of any string
  });
});
