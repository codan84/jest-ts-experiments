import imageType from 'image-type'

export const foo = (word: string): string => {
  try {
    imageType(Buffer.from('abcd', 'utf-8')) // import/use it just to prove a point!
  } catch {}
  return `not ${word}`
}