import { foo } from './foo.js'

export const concat = (a: string, b: string): string => {
  const c = foo(b)
  return `${a} ${c}`
}
