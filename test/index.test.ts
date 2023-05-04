import test from 'ava'
import * as td from 'testdouble'

import { logStuff } from './helpers.js'

let concat: (a: string, b: string) => Promise<string>
let iWantToBeMocked: () => number

test.before(async t => {
  iWantToBeMocked = (await td.replaceEsm('../src/want-to-be-mocked.js')).iWantToBeMocked
  concat = (await import('../src/index.js')).concat
})

test('some test', async t => {
  td.when(iWantToBeMocked()).thenReturn(33)
  
  const res = logStuff(await concat('some', 'stuff'))

  t.is(res, 'some not stuff 22')
})
