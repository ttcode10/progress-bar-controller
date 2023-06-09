import { trimProgressBarWidth, getComputedBarColor } from '../styleHelper';
import { colors } from '../../themes';

describe('trimProgressBarWidth function', () => {
  it('should be 100 if progress bar value is GREATER THAN 100', () => {
    const result = trimProgressBarWidth(110);
    expect(result).toBe(100);
  });

  it('should be 100 if progress bar value is EQUAL TO 100', () => {
    const result = trimProgressBarWidth(100);
    expect(result).toBe(100);
  });

  it('should be the 0 if progress bar value is LESS THAN 0', () => {
    const result = trimProgressBarWidth(-75);
    expect(result).toBe(0);
  });

  it('should be the EXACT value when the value is ranging from 0 to 100', () => {
    const result = trimProgressBarWidth(75);
    expect(result).toBe(75);
  });

});

describe('getComputedBarColor function', () => {
  it('should be tomatoRed color if value is GREATER THAN 100', () => {
    const result = getComputedBarColor(110);
    expect(result).toBe(colors.tomatoRed);
  });

  it('should be tomatoRed color if value is EQUAL TO 100', () => {
    const result = getComputedBarColor(100);
    expect(result).toBe(colors.tomatoRed);
  });

  it('should be oceanBlue color if value is LESS THAN 100', () => {
    const result = getComputedBarColor(75);
    expect(result).toBe(colors.oceanBlue);
  });
});
