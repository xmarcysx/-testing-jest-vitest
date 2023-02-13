import { it, expect, describe } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('should return a string no matter which value is passed in', () => {
    const val1 = 1;
    const val2 = 'invalid';
    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });
});
