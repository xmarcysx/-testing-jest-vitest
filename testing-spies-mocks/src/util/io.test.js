import { it, expect, describe, vi } from 'vitest';
import { promises as fs } from 'fs';
import path from 'path';

import writeData from './io';

describe('writeData()', () => {
  vi.mock('fs');
  vi.mock('path', () => {
    return {
      default: {
        join: (...args) => {
          return args[args.length - 1];
        },
      },
    };
  });

  it('should execute the writeFile method', () => {
    const testData = 'test';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
    //return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  });
});
