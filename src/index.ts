import { foo } from './foo.js'

export const concat = async (a: string, b: string): Promise<string> => {
  const c = await foo(b)
  return `${a} ${c}`
}
