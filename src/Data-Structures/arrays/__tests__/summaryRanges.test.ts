import summaryRanges from '../summaryRange';

describe('summaryRanges', () => {
  it('should return ["0->2","4->5","7"]', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7']);
  });
  it('should return ["0","2->4","6","8->9"]', () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual([
      '0',
      '2->4',
      '6',
      '8->9'
    ]);
  });
  it('should return []', () => {
    expect(summaryRanges([])).toEqual([]);
  });
  it('should return ["-1"]', () => {
    expect(summaryRanges([-1])).toEqual(['-1']);
  });
  it('should return ["0"]', () => {
    expect(summaryRanges([0])).toEqual(['0']);
  });
});
