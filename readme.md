## @joegesualdo/strip-keys-with-empty-values [![Build Status](https://travis-ci.org/joegesualdo/strip-keys-with-empty-values-js.svg?branch=master)](https://travis-ci.org/joegesualdo/strip-keys-with-empty-values-js)
> Strip an object's keys with empty values. Supports nested objects.

## Install
```
$ npm install --save @joegesualdo/strip-keys-with-empty-values
```

## Usage
```javascript
import stripKeysWithEmptyValues from "@joegesualdo/strip-keys-with-empty-values"

let obj = {
  name: 'joe',
  age: '',
  job: {
    title: 'cool',
    hours: ''
  }
}

stripKeysWithEmptyValues(obj, true)
//=> {
//     name: 'joe',
//     job: {
//       title: 'cool'
//     }
//   }
```

## API
### `stripKeysWithEmptyValues(obj, nested)`
> Strips the keys with empty values. Support nested objects.

| Name | Type | Description |
|------|------|-------------|
| obj | `Object` | The object you want to strip |
| nested | `Boolean` | Should the keys of nested objects be stripped?|

Returns: `Object`, that represents the obj provided but with the empty keys stripped.

```javascript
import stripKeysWithEmptyValues from "@joegesualdo/strip-keys-with-empty-values"

let obj = {
  name: 'joe',
  age: '',
  job: {
    title: 'cool',
    hours: ''
  }
}

stripKeysWithEmptyValues(obj, true)
//=> {
//     name: 'joe',
//     job: {
//       title: 'cool'
//     }
//   }
```

## Test
```
$ npm test
```
## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
