import imageType from 'image-type'

export const foo = async (word: string): Promise<string> => {
  try {
    const res = await imageType(Buffer.from('abcd', 'utf-8')) // import/use it just to prove a point!
    console.log(`got "${res}"`)
  } catch (e) {
    console.log(e)
  }
  return `not ${word}`
}