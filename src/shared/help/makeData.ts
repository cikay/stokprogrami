import namor from 'namor'
import gen from './generatorId'
const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newProduct = () => {
  return {
    id: Number(gen.next().value),
    name: namor.generate({ words: 1, numbers: 0 }),
    description: namor.generate({ words: 1, numbers: 0 }),
    storage: namor.generate({ words: 1, numbers: 0 }),
    category: namor.generate({ words: 1, numbers: 0 }),
  }
}

export default function makeProduct(len: number) {
  return range(len).map((d) => newProduct())
}
