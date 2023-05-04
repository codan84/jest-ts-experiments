import { foo } from './foo.js'
import { iWantToBeMocked } from './want-to-be-mocked.js'

export const concat = async (a: string, b: string): Promise<string> => {
  const c = await foo(b)
  const d = iWantToBeMocked()
  return `${a} ${c} ${d}`
}
