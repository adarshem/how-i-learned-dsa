import moveZeroes from '../moveZeroes';

describe('moveZeroes', () => {
  it('should move all zeroes to the end while maintaining the order of non-zero elements', () => {
    const nums = [0, 1, 2, 0, 3, 12, 0];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3, 12, 0, 0, 0]);
  });

  it('should handle an array with no zeroes', () => {
    const nums = [1, 2, 3, 4];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3, 4]);
  });

  it('should handle an array with all zeroes', () => {
    const nums = [0, 0, 0, 0];
    moveZeroes(nums);
    expect(nums).toEqual([0, 0, 0, 0]);
  });

  it('should handle an empty array', () => {
    const nums: number[] = [];
    moveZeroes(nums);
    expect(nums).toEqual([]);
  });

  it('should handle an array with one element being zero', () => {
    const nums = [0];
    moveZeroes(nums);
    expect(nums).toEqual([0]);
  });

  it('should handle an array with one non-zero element', () => {
    const nums = [5];
    moveZeroes(nums);
    expect(nums).toEqual([5]);
  });

  it('should handle an array with alternating zero and non-zero elements', () => {
    const nums = [0, 1, 0, 2, 0, 3];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3, 0, 0, 0]);
  });

  it('should handle an array with non-zero elements followed by zeroes', () => {
    const nums = [1, 2, 3, 0, 0, 0];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3, 0, 0, 0]);
  });
});
