import { describe, it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('sholud throw an error if an empty string is provied', () => {
  const testInput = '';

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it('sholud throw an error with the provieded error message', () => {
  const testInput = '';
  const testErrorMessage = 'Test';

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrow(testErrorMessage);
});
