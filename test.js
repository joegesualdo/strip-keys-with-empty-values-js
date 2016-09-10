import test from 'ava';
import @joegesualdo/strip-keys-with-empty-values from './dist'

test(t => {
    t.deepEqual([1, 2], [1, 2]);
});