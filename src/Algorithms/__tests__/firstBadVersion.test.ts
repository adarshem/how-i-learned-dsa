import { firstBadVersion } from '../binarySearch/firstBadVersion';

describe('firstBadVersion', () => {
  it('should return the first bad version', () => {
    expect(firstBadVersion(5)).toBe(4);
    expect(firstBadVersion(1)).toBe(1);
    expect(firstBadVersion(100)).toBe(4);
  });
});
