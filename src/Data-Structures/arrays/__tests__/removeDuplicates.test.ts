import {
  removeDuplicates,
  removeDuplicatesWithSet
} from '../removeDuplicatesFromSortedArray';

describe('removeDuplicates', () => {
  test('should remove duplicates from sorted array', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });

  test('should remove duplicates from sorted array', () => {
    expect(removeDuplicatesWithSet([0,0,1,1,1,2,2,3,3,4])).toBe(5);
  });
});
