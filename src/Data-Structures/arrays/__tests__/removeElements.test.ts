import { removeElements, removeElementsUsingFilter } from '../removeElements';

describe('removeElements', () => {
  test('should remove elements from array', () => {
    expect(removeElements([3, 2, 2, 3], 3)).toBe(2);
  });

  test('should remove elements from array', () => {
    expect(removeElements([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });
});

describe('removeElementsUsingFilter', () => {
  test('should remove elements from array', () => {
    expect(removeElementsUsingFilter([3, 2, 2, 3], 3)).toBe(2);
  });

  test('should remove elements from array', () => {
    expect(removeElementsUsingFilter([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });
});
