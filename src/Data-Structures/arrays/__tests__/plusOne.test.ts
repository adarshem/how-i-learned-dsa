import { plusOne, plusOneImproved } from '../plusOne';

describe('plusOne', () => {
  test('should return [1,0] when input is [9]', () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });
  test('should return [1,2,4,5] when input is [1,2,4,4]', () => {
    expect(plusOne([1, 2, 4, 4])).toEqual([1, 2, 4, 5]);
  });
  test('should return [1,0,0,0] when input is [9,9,9]', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});

describe('plusOneImproved', () => {
  test('should return [1,0] when input is [9]', () => {
    expect(plusOneImproved([9])).toEqual([1, 0]);
  });
  test('should return [1,2,4,5] when input is [1,2,4,4]', () => {
    expect(plusOneImproved([1, 2, 4, 4])).toEqual([1, 2, 4, 5]);
  });
  test('should return [1,0,0,0] when input is [9,9,9]', () => {
    expect(plusOneImproved([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
