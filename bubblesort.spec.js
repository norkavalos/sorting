describe('Bubble Sort', function() {
  beforeAll(function() {
    let counter = 0;
    spyOn(counter, 'swap').and.callThrough();
  });
  it('calls "swap"', function() {
    bubbleSort([3, 2, 1]);
    expect(swap.calls.count()).toEqual(3);
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles a single element array', function() {
    expect(bubbleSort([1]).toEqual([1]));
  });

  it('handles multiple-element arrays', function() {
    expect(bubbleSort([3, 2, 1]).toEqual([1, 2, 3]));
  });
});
