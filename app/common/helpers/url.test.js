import { createUrl } from './url';

describe('createUrl', () => {
  test('add query params', () => {
    const url = createUrl('http://localhost', { test: 1 });
    expect(url).toBe('http://localhost/?test=1');
  });
});
