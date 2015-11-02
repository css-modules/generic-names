describe('generic-names', function () {
  'use strict';

  var assert = require('assert');
  var genericNames = require('.');

  it('should use cwd if no context provided', function () {
    var generate = genericNames('[name]__[local]___[hash:base64:5]');
    assert.equal(generate('foo', '/test/case/source.css'), 'source__foo___2e670');
  });

  it('should generate another hash for the provided context', function () {
    var generate = genericNames('[name]__[local]___[hash:base64:5]', {context: '/test'});
    assert.equal(generate('foo', '/test/case/source.css'), 'source__foo___19xFw');
  });

  it('should generate another hash for the provided hashPrefix', function () {
    var generate = genericNames('[name]__[local]___[hash:base64:5]', {context: '/test', hashPrefix: '--'});
    assert.equal(generate('foo', '/test/case/source.css'), 'source__foo___3T0Un');
  });
});
