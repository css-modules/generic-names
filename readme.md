generic-names
=============

Helper for building generic names, similar to webpack. Designed to be used with [postcss-modules-scope](https://github.com/css-modules/postcss-modules-scope).

## API

```javascript
var genericNames = require('generic-names');
var generate = genericNames('[name]__[local]___[hash:base64:5]', {
  context: process.cwd()
});

generate('foo', '/case/source.css'); // 'source__foo___3mRq8'
```
