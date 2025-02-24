import { searchInsert } from '../searchInsertSortedArray';

describe('searchInsert', () => {
  test('should return the index if the target is found', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test('should return the index where it would be if it were inserted in order', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
});
