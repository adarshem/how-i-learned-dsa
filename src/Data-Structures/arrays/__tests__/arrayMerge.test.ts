import { mergeSortedArrays, mergeInPlace } from '../mergeSortedArrays';

describe('mergeSortedArrays', () => {
  it('should merge two sorted arrays', () => {
    expect(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])).toEqual([
      0, 3, 4, 4, 6, 30, 31
    ]);
    expect(mergeSortedArrays([4, 6, 30], [0, 3, 4, 31])).toEqual([
      0, 3, 4, 4, 6, 30, 31
    ]);
    expect(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8
    ]);
  });
});

describe('mergeInPlace', () => {
  it('should merge two sorted arrays in place', () => {
    const arr1 = [1, 2, 3, 0, 0, 0];
    const arr2 = [2, 5, 6];
    mergeInPlace(arr1, 3, arr2, 3);
    expect(arr1).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
