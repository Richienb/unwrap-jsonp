# unwrap-jsonp [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/unwrap-jsonp/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/unwrap-jsonp)

Unwrap the values in a JSONP function.

[![NPM Badge](https://nodei.co/npm/unwrap-jsonp.png)](https://npmjs.com/package/unwrap-jsonp)

## Install

```sh
npm install unwrap-jsonp
```

## Usage

```js
const unwrapJsonp = require("unwrap-jsonp")

unwrapJsonp(`fn({a: "b"})`)
//=> {a: "b"}

unwrapJsonp(`fn("a", "b")`, {multiArgs: true})
//=> ["a", "b"]
```

## API

### unwrapJsonp(data, options?)

#### data

Type: `string`

The jsonp to parse.

#### options

Type: `object`

##### multiArgs

Type: `boolean`\
Default: `false`

Return an array of the function arguments instead of just the first one.
