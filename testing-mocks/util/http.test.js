import { vi, describe, it, expect } from 'vitest';
import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };
const testFunction = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string');
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});
vi.stubGlobal('fetch', testFunction);

it('should return any available response data', () => {
  const testData = { key: 'test' };

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should body include data json parsed to string before send', async () => {
  const testData = { key: 'test' };

  let errorMsg;

  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMsg = error;
  }
  expect(errorMsg).not.toBe('Not a string');
});
