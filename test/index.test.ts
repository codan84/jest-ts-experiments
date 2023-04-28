import { expect, jest, test, describe } from '@jest/globals'

import { concat } from '../src/index'

describe('some test suite', () => {
  test('some test', () => {
    const res = concat('some', 'stuff')

    expect(res).toEqual('some not stuff')
  })
})
