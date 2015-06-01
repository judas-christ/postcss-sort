# postcss-sort

PostCSS plugin for sorting properties

## Usage

```js
postcss([ require('postcss-sort') ])
```

See [PostCSS] docs for examples for your environment.

By default, properties are sorted alphabetically. If you want to sort them another way, you can supply your own sorting function.

```js
var sort = require('postcss-sort')(sortingFunction);
``

[PostCSS]:      https://github.com/postcss/postcss
