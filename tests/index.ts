import { Math } from '@/index';

describe('App', () => {
  test('Math', async () => {
    expect(Math.add(1, 2)).toBe(3);
    expect(Math.subtract(1, 2)).toBe(-1);
    expect(Math.multiply(1, 2)).toBe(2);
    expect(Math.divide(1, 2)).toBe(0.5);
    expect(Math.log(1)).toBeUndefined();
  });
});
