import test from 'ava';
import stripKeysWithEmptyValues from "./dist"

test(t => {
  let originalObj = {name: 'joe', age: ''}
  let newObj = stripKeysWithEmptyValues(originalObj)
  t.deepEqual(newObj, {name: 'joe'});
});
