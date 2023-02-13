import { it, expect, describe } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', (done) => {
  it('sholud generate a token value', () => {
    const testUserEmail = 'test@test.pl';

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBe();
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('should generate a token value - promise', async () => {
    const testUserEmail = 'test@test.pl';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined;
  });
});
