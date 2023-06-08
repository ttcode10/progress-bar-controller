import { trimProgressBarWidth } from '../trimProgressBarWidth';

describe('trimProgressBarWidth function', () => {
  it('should be 100 if progress bar value is GREATER THAN 100', () => {
    const result = trimProgressBarWidth(110);
    expect(result).toBe(100);
  });

  it('should be 100 if progress bar value is EQUAL TO 100', () => {
    const result = trimProgressBarWidth(100);
    expect(result).toBe(100);
  });

  it('should be the EXACT value as given progress bar value', () => {
    const result = trimProgressBarWidth(75);
    expect(result).toBe(75);
  });
});
