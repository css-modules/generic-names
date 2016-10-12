'use strict';

const genericNames = require('../index');
const test = require('tape');

const pattern = '[name]__[local]___[hash:base64:5]';

test('use `cwd` if no context was provided', t => {
  const generate = genericNames(pattern);

  t.equal(generate('foo', '/test/case/source.css'), 'source__foo___2e670');
  t.end();
});

test('generate distinct hash for the provided context', t => {
  const generate = genericNames(pattern, {context: '/test'});

  t.equal(generate('foo', '/test/case/source.css'), 'source__foo___19xFw');
  t.end();
});

test('generate distinct hash for the provided hashPrefix', t => {
  const generate = genericNames(pattern, {context: '/test', hashPrefix: '--'});

  t.equal(generate('foo', '/test/case/source.css'), 'source__foo___3T0Un');
  t.end();
});
