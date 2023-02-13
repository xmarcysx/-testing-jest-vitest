import { it, expect, describe } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
  it('should throw an error if NaN', () => {
    const input = 'a';
    const result = transformToNumber(input);
    expect(result).toBeNaN;
  });

  it('should transform a string number to a number of type number', () => {
    const input = '1';
    const result = transformToNumber(input);
    expect(result).toBe(1).toBeTypeOf('number');
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string is provided', () => {
    const numberValues = ['1', '2'];

    const results = cleanNumbers(numberValues);

    expect(results[0]).toBeTypeOf('number');
    expect(results).toEqual([1, 2]);
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
