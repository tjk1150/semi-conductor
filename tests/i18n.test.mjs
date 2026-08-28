import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTranslator, t } from '../src/scripts/i18n.js';
import ko from '../src/locales/ko.js';

test('returns the string for a known key', () => {
  const tr = createTranslator({ hello: '안녕하세요' });
  assert.equal(tr('hello'), '안녕하세요');
});

test('interpolates {placeholders} from vars', () => {
  const tr = createTranslator({ link: '링크: {url}' });
  assert.equal(tr('link', { url: 'https://example.com' }), '링크: https://example.com');
});

test('leaves unknown placeholders untouched', () => {
  const tr = createTranslator({ link: '링크: {url}' });
  assert.equal(tr('link'), '링크: {url}');
});

test('falls back to the key when missing', () => {
  const tr = createTranslator({});
  assert.equal(tr('nope'), 'nope');
});

test('does not mutate the dictionary', () => {
  const dict = Object.freeze({ a: 'b' });
  const tr = createTranslator(dict);
  tr('a');
  assert.deepEqual(dict, { a: 'b' });
});

test('ko locale has every key the renderer uses, all non-empty', () => {
  const required = [
    'start', 'calibrated', 'fitInFrame', 'cameraErrorTitle', 'cameraError',
    'mobileTitle', 'mobileMessage', 'mobileEmailButton', 'mobileEmailSubject', 'mobileEmailBody',
  ];
  for (const key of required) {
    assert.equal(typeof ko[key], 'string', `missing key: ${key}`);
    assert.ok(ko[key].length > 0, `empty key: ${key}`);
  }
  assert.equal(t('start'), ko.start);
});
