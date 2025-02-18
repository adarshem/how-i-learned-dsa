import {
  reverseString,
  reverseStringUsingBuiltInMethod
} from '../reverseString';

describe('reverse string functions', () => {
  test('reverseString - should reverse a string of array', () => {
    // Event number elements
    expect(reverseString(['h', 'e', 'l', 'l', 'o', 't'])).toEqual([
      't',
      'o',
      'l',
      'l',
      'e',
      'h'
    ]);

    // Odd number elements
    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
      'o',
      'l',
      'l',
      'e',
      'h'
    ]);
  });

  test('reverseStringUsingBuiltInMethod - should reverse a string of array', () => {
    // Event number elements
    expect(
      reverseStringUsingBuiltInMethod(['h', 'e', 'l', 'l', 'o', 't'])
    ).toEqual(['t', 'o', 'l', 'l', 'e', 'h']);

    // Odd number elements
    expect(reverseStringUsingBuiltInMethod(['h', 'e', 'l', 'l', 'o'])).toEqual([
      'o',
      'l',
      'l',
      'e',
      'h'
    ]);
  });
});
