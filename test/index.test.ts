import test from 'ava'

import { concat } from '../src/index.js'
import { logStuff } from './helpers.js'

test('some test', async t => {
  const res = logStuff(await concat('some', 'stuff'))

  t.is(res, 'some not stuff')
})
