import pivotIndex from 'letCode/pivotIndex';

describe('pivotIndex: ', () => {
    it('Example 1', () => {
      const result = pivotIndex([1,7,3,6,5,6]);

      expect(result).toBe(3);
    });

    it('Example 2', () => {
      const result = pivotIndex([1,2,3]);

      expect(result).toBe(-1);
    });

    it('Example 3', () => {
      const result = pivotIndex([2,1,-1]);

      expect(result).toBe(0);
    });

    it('Example 4', () => {
      const result = pivotIndex([33,27,10,10,5,5,33,10,10,10,10,10,10,10,5,5,10]);

      expect(result).toBe(6);
    });
});