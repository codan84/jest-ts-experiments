import test from 'ava'
import * as td from 'testdouble'

import { logStuff } from './helpers.js'

let concat: (a: string, b: string) => Promise<string>

test.before(async t => {
  const concatM = await import('../src/index.js')
  concat = concatM.concat
})

test('some test', async t => {
  console.log(concat)
  const res = logStuff(await concat('some', 'stuff'))

  t.is(res, 'some not stuff 22')
})
