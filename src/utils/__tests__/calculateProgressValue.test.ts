import { calculateProgressValue } from '../calculateProgressValue';

describe('calculateProgressValue function', () => {
	it('should be 0 if calculated result is LESS THAN 0', () => {
		const result = calculateProgressValue(10, -20);
		expect(result).toBe(0);
	});

  it('should be 0 if calculated result is EQUAL TO 0', () => {
    const result = calculateProgressValue(10, -10);
    expect(result).toBe(0);
  });

  it('should be the correct result after calculation', () => {
    const result = calculateProgressValue(10, 20);
    expect(result).toBe(30);
  });
});
