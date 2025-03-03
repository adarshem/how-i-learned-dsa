import binarySearch, { searchRange } from '../binarySearch/binarySearch';

describe('binarySearch', () => {
  it('should return the index of the target in a sorted array', () => {
    expect(binarySearch([0, 3, 5, 9, 12], 9)).toBe(3);
  });

  it('should return -1 if the target element is not found in the array', () => {
    expect(binarySearch([0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});

describe('searchRange', () => {
  it('should return the target number', () => {
    expect(searchRange(0, 100)).toBe(10);
  });

  it('should return -1 if the target number is not found', () => {
    expect(searchRange(0, 9)).toBe(-1);
  });
});
