import { maxSubArraySum } from '../problemSolvingPatterns/slidingWindow';

describe('maxSubArraySum', () => {
  it('should return the maximum sum of a subarray of length num', () => {
    const arr = [1, 2, 5, 2, 8, 1, 5];
    const num = 2;
    const result = maxSubArraySum(arr, num);
    expect(result).toBe(10); // 8 + 2
  });
  it('should return 0 if num is less than or equal to 0', () => {
    const arr = [1, 2, 5, 2, 8, 1, 5];
    const num = -1;
    const result = maxSubArraySum(arr, num);
    expect(result).toBe(0);
  });
  it('should return 0 if arr is empty', () => {
    const arr: number[] = [];
    const num = 2;
    const result = maxSubArraySum(arr, num);
    expect(result).toBe(0);
  });
  it('should return 0 if arr length is less than num', () => {
    const arr = [1, 2];
    const num = 3;
    const result = maxSubArraySum(arr, num);
    expect(result).toBe(0);
  });
  it('should return the sum of the entire array if num is equal to arr length', () => {
    const arr = [1, 2, 3];
    const num = 3;
    const result = maxSubArraySum(arr, num);
    expect(result).toBe(6); // 1 + 2 + 3
  });
  it('should return the maximum sum of a subarray of length num with negative numbers', () => {
    const arr = [-1, -2, -5, -2, -8, -1, -5];
    const num = 2;
    const result = maxSubArraySum(arr, num);
    expect(result).toBe(-3); // -1 + -2
  });
});
