import { expect, test, describe } from '@jest/globals';
import { concat } from '../src/index.js';
import { logStuff } from './helpers.js';
describe('some test suite', () => {
    test('some test', () => {
        const res = logStuff(concat('some', 'stuff'));
        // const res = concat('some', 'stuff')
        expect(res).toEqual('some not stuff');
    });
});
