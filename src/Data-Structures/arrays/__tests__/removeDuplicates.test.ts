import {
  getNumberOfUniqueElements,
  getNumberOfUniqueElementsUsingSet
} from '../getNumberOfUniqueElementsFromSortedArray';

describe('removeDuplicates', () => {
  test('should remove duplicates from sorted array', () => {
    expect(getNumberOfUniqueElements([1, 3, 3, 4, 5, 6, 7])).toBe(6);
  });

  test('should remove duplicates from sorted array', () => {
    expect(getNumberOfUniqueElements([1, 1, 2])).toBe(2);
  });

  test('should remove duplicates from sorted array', () => {
    expect(
      getNumberOfUniqueElementsUsingSet([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    ).toBe(5);
  });
});
